import { useEffect, useRef } from 'react'

const consulta = (q) =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia(q) : null

export function movimientoReducido() {
  const preferencia = consulta('(prefers-reduced-motion: reduce)')
  return Boolean(preferencia && preferencia.matches)
}

export function motionPermitido() {
  return !movimientoReducido() && typeof window !== 'undefined' && 'IntersectionObserver' in window
}

export function activarMotion() {
  if (motionPermitido()) document.documentElement.classList.add('motion-activo')
}

export function conCuadro(fn) {
  let cuadro = 0
  const envuelto = () => {
    if (cuadro) return
    cuadro = requestAnimationFrame(() => {
      cuadro = 0
      fn()
    })
  }
  envuelto.cancelar = () => {
    if (cuadro) cancelAnimationFrame(cuadro)
    cuadro = 0
  }
  return envuelto
}

function observarEntradas(pares) {
  const objetivos = new Map(pares)
  const relojes = new Map()

  const olvidar = (nodo) => {
    nodo.removeEventListener('transitionend', escuchar)
    const reloj = relojes.get(nodo)
    if (reloj) {
      clearTimeout(reloj)
      relojes.delete(nodo)
    }
  }

  const finalizar = (nodo) => {
    nodo.classList.remove('por-revelar', 'revelada')
    olvidar(nodo)
  }

  const escuchar = (evento) => {
    if (evento.propertyName !== 'opacity' && evento.propertyName !== 'clip-path') return
    finalizar(evento.target)
  }

  const animar = (nodo) => {
    if (!nodo.classList.contains('por-revelar')) return
    nodo.classList.add('revelada')
    nodo.addEventListener('transitionend', escuchar)
    relojes.set(nodo, setTimeout(() => finalizar(nodo), 1600))
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const nodo = objetivos.get(entrada.target)
        if (!nodo) return
        if (entrada.isIntersecting) {
          observador.unobserve(entrada.target)
          animar(nodo)
          return
        }
        if (entrada.boundingClientRect.bottom <= 0) {
          observador.unobserve(entrada.target)
          animar(nodo)
          return
        }
        nodo.classList.add('por-revelar')
      })
    },
    { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
  )

  pares.forEach(([observado]) => observador.observe(observado))
  observador.olvidarTodo = () => {
    relojes.forEach((reloj) => clearTimeout(reloj))
    relojes.clear()
    observador.disconnect()
  }
  return observador
}

export function useRevelar() {
  const ref = useRef(null)

  useEffect(() => {
    const observado = ref.current
    if (!observado || !motionPermitido()) return undefined
    const nodo = observado.querySelector('[data-mascara]') || observado
    const observador = observarEntradas([[observado, nodo]])
    return () => observador.olvidarTodo()
  }, [])

  return ref
}

export function useRevelarHijos() {
  const ref = useRef(null)

  useEffect(() => {
    const contenedor = ref.current
    if (!contenedor || !motionPermitido()) return undefined
    const hijos = Array.from(contenedor.querySelectorAll('[data-revelar]'))
    if (!hijos.length) return undefined
    const pares = hijos.map((hijo, i) => {
      hijo.style.setProperty('--revelar-espera', `${i * 110}ms`)
      return [hijo, hijo.querySelector('[data-mascara]') || hijo]
    })
    const observador = observarEntradas(pares)
    return () => observador.olvidarTodo()
  }, [])

  return ref
}

export function useParallax(ref, distancia = 64) {
  useEffect(() => {
    const nodo = ref.current
    if (!nodo || movimientoReducido()) return undefined

    const pintar = () => {
      const altura = window.innerHeight || 1
      const avance = Math.min(Math.max(window.scrollY, 0), altura) / altura
      nodo.style.transform = `translate3d(0, ${(avance * distancia).toFixed(2)}px, 0) scale(1.16)`
    }

    const alDesplazar = conCuadro(pintar)
    pintar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    window.addEventListener('resize', alDesplazar, { passive: true })
    return () => {
      window.removeEventListener('scroll', alDesplazar)
      window.removeEventListener('resize', alDesplazar)
      alDesplazar.cancelar()
    }
  }, [ref, distancia])

  return ref
}

export function useProgreso(ref, alCambiar) {
  const callback = useRef(alCambiar)

  useEffect(() => {
    callback.current = alCambiar
  }, [alCambiar])

  useEffect(() => {
    const seccion = ref.current
    if (!seccion || !motionPermitido()) return undefined

    const calcular = () => {
      const rect = seccion.getBoundingClientRect()
      const recorrido = rect.height - window.innerHeight
      if (recorrido <= 0) return
      const avance = Math.min(Math.max(-rect.top / recorrido, 0), 1)
      seccion.style.setProperty('--progreso', avance.toFixed(4))
      callback.current(avance)
    }

    const alDesplazar = conCuadro(calcular)
    window.addEventListener('scroll', alDesplazar, { passive: true })
    window.addEventListener('resize', alDesplazar, { passive: true })
    return () => {
      window.removeEventListener('scroll', alDesplazar)
      window.removeEventListener('resize', alDesplazar)
      alDesplazar.cancelar()
    }
  }, [ref])

  return ref
}

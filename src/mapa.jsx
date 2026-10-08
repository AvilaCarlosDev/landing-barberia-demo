import { useEffect, useRef } from 'react'
import { motionPermitido } from './motion.js'

const destino = 'https://www.google.com/maps/search/?api=1&query=Av.+Tachira+con+Calle+Comercio+Punto+Fijo'

const horizontales = [
  { y: 62, h: 22 },
  { y: 190, h: 54 },
  { y: 330, h: 22 },
]

const verticales = [
  { x: 46, w: 22 },
  { x: 248, w: 24 },
  { x: 432, w: 30 },
  { x: 582, w: 22 },
]

const tramosAvenida = [
  [0, 46],
  [68, 248],
  [272, 432],
  [462, 582],
  [604, 640],
]

const edificios = [
  { x: 80, y: 10, w: 60, h: 40, tono: '#dfe1e5' },
  { x: 152, y: 10, w: 88, h: 40, tono: '#dadce0' },
  { x: 290, y: 10, w: 120, h: 40, tono: '#dfe1e5' },
  { x: 474, y: 10, w: 94, h: 40, tono: '#dadce0' },
  { x: 8, y: 96, w: 28, h: 80, tono: '#dfe1e5' },
  { x: 80, y: 96, w: 68, h: 44, tono: '#dadce0' },
  { x: 158, y: 96, w: 52, h: 44, tono: '#dfe1e5' },
  { x: 80, y: 150, w: 130, h: 30, tono: '#dfe1e5' },
  { x: 474, y: 96, w: 94, h: 50, tono: '#dadce0' },
  { x: 474, y: 156, w: 94, h: 24, tono: '#dfe1e5' },
  { x: 612, y: 96, w: 20, h: 60, tono: '#dadce0' },
  { x: 84, y: 256, w: 60, h: 60, tono: '#dadce0' },
  { x: 156, y: 256, w: 70, h: 36, tono: '#dfe1e5' },
  { x: 156, y: 302, w: 70, h: 16, tono: '#dadce0' },
  { x: 284, y: 256, w: 60, h: 40, tono: '#dadce0' },
  { x: 356, y: 256, w: 64, h: 62, tono: '#dfe1e5' },
  { x: 476, y: 256, w: 88, h: 62, tono: '#dfe1e5' },
  { x: 8, y: 256, w: 28, h: 60, tono: '#dadce0' },
  { x: 612, y: 256, w: 20, h: 64, tono: '#dfe1e5' },
  { x: 80, y: 364, w: 88, h: 46, tono: '#dadce0' },
  { x: 180, y: 364, w: 52, h: 46, tono: '#dfe1e5' },
  { x: 290, y: 364, w: 128, h: 46, tono: '#dadce0' },
  { x: 474, y: 364, w: 94, h: 46, tono: '#dfe1e5' },
]

const recorrido = 'M 260 410 L 260 341 L 447 341 L 447 217'

const halo = { paintOrder: 'stroke' }

export function MapaUbicacion() {
  const ref = useRef(null)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return undefined
    const marcar = () => nodo.classList.add('mapa-dibujada')
    if (!motionPermitido()) {
      marcar()
      return undefined
    }
    let cuadro = 0
    const observador = new IntersectionObserver(
      (entradas) => {
        const entrada = entradas[0]
        if (!entrada) return
        if (!entrada.isIntersecting && entrada.boundingClientRect.bottom > 0) return
        observador.disconnect()
        cuadro = requestAnimationFrame(marcar)
      },
      { threshold: 0.3 },
    )
    observador.observe(nodo)
    return () => {
      observador.disconnect()
      if (cuadro) cancelAnimationFrame(cuadro)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative w-full border border-[#d39b55]/55 bg-[#17140f] p-2 shadow-[0_26px_54px_-30px_rgba(0,0,0,.95)]"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 border border-[#d39b55]/25" />
      <svg
        viewBox="0 0 640 420"
        role="img"
        aria-label="Mapa de Noble Barber en Av. Táchira con calle Comercio, Local 8, Punto Fijo"
        className="block h-auto w-full"
      >
        <rect x="0" y="0" width="640" height="420" fill="#e8eaed" />
        <rect x="274" y="86" width="156" height="102" fill="#c8e6c9" />
        {edificios.map((edificio) => (
          <rect
            key={`${edificio.x}-${edificio.y}`}
            x={edificio.x}
            y={edificio.y}
            width={edificio.w}
            height={edificio.h}
            fill={edificio.tono}
          />
        ))}
        {horizontales.map((calle) => (
          <rect key={`c${calle.y}`} x={-2} y={calle.y - 2} width={644} height={calle.h + 4} fill="#dadce0" />
        ))}
        {verticales.map((calle) => (
          <rect key={`v${calle.x}`} x={calle.x - 2} y={-2} width={calle.w + 4} height={424} fill="#dadce0" />
        ))}
        {horizontales.map((calle) => (
          <rect key={`h${calle.y}`} x="0" y={calle.y} width="640" height={calle.h} fill="#ffffff" />
        ))}
        {verticales.map((calle) => (
          <rect key={`vv${calle.x}`} x={calle.x} y="0" width={calle.w} height="420" fill="#ffffff" />
        ))}
        {tramosAvenida.map(([inicio, fin]) => (
          <line
            key={`a${inicio}`}
            x1={inicio}
            y1="217"
            x2={fin}
            y2="217"
            stroke="#dadce0"
            strokeWidth="2"
            strokeDasharray="16 14"
          />
        ))}

        <path className="mapa-ruta" d={recorrido} pathLength="1" strokeDasharray="1" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path className="mapa-ruta" d={recorrido} pathLength="1" strokeDasharray="1" fill="none" stroke="#1a73e8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="260" cy="410" r="6" fill="#1a73e8" stroke="#ffffff" strokeWidth="3" />

        <g transform="translate(447,217)">
          <ellipse cx="0" cy="5" rx="9" ry="3.5" fill="#3c4043" opacity="0.3" />
          <g className="mapa-pin">
            <path
              d="M0 0 C -4.5 -8 -11 -14.5 -11 -22 A 11 11 0 0 1 11 -22 C 11 -14.5 4.5 -8 0 0 Z"
              fill="#ea4335"
            />
            <circle cx="0" cy="-22" r="4.6" fill="#ffffff" />
          </g>
        </g>

        <text
          x="466"
          y="199"
          fontSize="15"
          fontWeight="700"
          fill="#202124"
          stroke="#ffffff"
          strokeWidth="4"
          style={halo}
        >
          Noble Barber · Local 8
        </text>
        <text
          x="24"
          y="220"
          fontSize="15"
          fontWeight="600"
          fill="#3c4043"
          stroke="#ffffff"
          strokeWidth="4"
          style={halo}
        >
          Av. Táchira
        </text>
        <text
          x="450"
          y="137"
          fontSize="13"
          fontWeight="600"
          fill="#3c4043"
          stroke="#ffffff"
          strokeWidth="4"
          textAnchor="middle"
          transform="rotate(-90 450 137)"
          style={halo}
        >
          Calle Comercio
        </text>

        <g aria-hidden="true">
          <rect x="14" y="398" width="66" height="15" fill="#ffffff" stroke="#dadce0" />
          <text x="47" y="409" fontSize="9" fontWeight="600" fill="#3c4043" textAnchor="middle">
            100 m
          </text>
          <rect x="598" y="354" width="30" height="58" fill="#ffffff" stroke="#dadce0" />
          <line x1="598" y1="383" x2="628" y2="383" stroke="#dadce0" />
          <text x="613" y="375" fontSize="17" fontWeight="600" fill="#3c4043" textAnchor="middle">
            +
          </text>
          <text x="613" y="404" fontSize="17" fontWeight="600" fill="#3c4043" textAnchor="middle">
            −
          </text>
        </g>
      </svg>
    </div>
  )
}

export function BotonComoLlegar({ className = '' }) {
  return (
    <a
      href={destino}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 border border-[#d39b55] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#d39b55] transition hover:-translate-y-0.5 hover:bg-[#d39b55] hover:text-[#15110d] ${className}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="h-4 w-4" fill="currentColor">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
      Cómo llegar
    </a>
  )
}

import { useCallback, useRef, useState } from 'react'
import { Rotulo } from './sitio.jsx'
import { useProgreso } from './motion.js'

const pasos = [
  {
    numero: '01',
    titulo: 'Preparación',
    texto: 'Diagnóstico del estilo, lavado y peinado por secciones para trabajar el cabello con control.',
    foto: '/img/foto-16054977880445.jpg',
    alt: 'Barbero peinando el cabello de un cliente con secador antes de cortar',
  },
  {
    numero: '02',
    titulo: 'Corte',
    texto: 'Tijera arriba y máquina en los costados: estructura, volumen y desvanecido a la medida.',
    foto: '/img/barbero-corte-maquina-1.jpg',
    alt: 'Barbero cortando el cabello de un cliente con la máquina',
  },
  {
    numero: '03',
    titulo: 'Acabado',
    texto: 'Contorno a navaja, líneas limpias y fijación final según tu tipo de cabello.',
    foto: '/img/barbero-navaja-cuello-1.jpg',
    alt: 'Barbero marcando el contorno del cuello con la navaja',
  },
]

export function SeccionCorte() {
  const seccion = useRef(null)
  const [activo, setActivo] = useState(0)

  const alCambiar = useCallback((avance) => {
    const indice = Math.min(pasos.length - 1, Math.floor(avance * pasos.length))
    setActivo((anterior) => (anterior === indice ? anterior : indice))
  }, [])

  useProgreso(seccion, alCambiar)

  return (
    <section id="corte" ref={seccion} className="corte bg-[#11100e]">
      <div className="corte-escenario">
        <div className="corte-fotos">
          {pasos.map((paso, i) => (
            <img
              key={paso.foto}
              src={paso.foto}
              alt={paso.alt}
              data-activa={i === activo ? 'si' : 'no'}
              className="corte-foto"
              loading="lazy"
            />
          ))}
        </div>
        <div className="corte-velo" aria-hidden="true" />

        <div className="corte-contenido mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Rotulo
            antetitulo="El corte"
            titulo="Paso a paso"
            texto="Tres momentos que se repiten en cada cita. Ninguno se salta, ninguno se improvisa."
          />

          <ol className="mt-9 grid gap-4 sm:grid-cols-3">
            {pasos.map((paso, i) => (
              <li
                key={paso.numero}
                data-activa={i === activo ? 'si' : 'no'}
                className="corte-paso border border-[#d39b55]/35 bg-[#11100e]/75 p-5 backdrop-blur-md sm:p-6"
              >
                <span className="tabular block font-serif text-3xl font-black text-[#d39b55]">{paso.numero}</span>
                <h3 className="mt-3 font-serif text-xl font-black uppercase tracking-[0.06em] sm:text-2xl">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-[#f4eadc]/75">{paso.texto}</p>
              </li>
            ))}
          </ol>

          <span aria-hidden="true" className="corte-barra mt-8 block h-px w-full bg-[#f4eadc]/20">
            <span className="corte-barra-lleno block h-px origin-left bg-[#d39b55]" />
          </span>
        </div>
      </div>
    </section>
  )
}

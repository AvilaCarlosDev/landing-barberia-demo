import { useEffect, useMemo, useRef, useState } from 'react'
import { Contador, DivisorPole, MenuMovil, Rotulo, SaltarAlContenido, TiraPole, WhatsAppFlotante } from './sitio.jsx'
import { SeccionCorte } from './corte.jsx'
import { BotonComoLlegar, MapaUbicacion } from './mapa.jsx'
import { activarMotion, useParallax, useRevelar, useRevelarHijos } from './motion.js'
import { useSeccionActiva, wa } from './navegacion.js'

const enlaces = [
  ['servicios', 'Servicios'],
  ['barberos', 'Barberos'],
  ['membresias', 'Membresías'],
  ['ubicacion', 'Ubicación'],
]

const serviceFilters = ['Todos', 'Corte', 'Barba', 'Tratamiento', 'Color']

const services = [
  {
    name: 'Signature Cut',
    category: 'Corte',
    price: '$12',
    time: '35 min',
    desc: 'Diagnóstico de estilo, corte de precisión, lavado y styling final.',
    tag: 'Popular',
  },
  {
    name: 'Corte + Barba Ritual',
    category: 'Barba',
    price: '$20',
    time: '55 min',
    desc: 'Fade personalizado, barba con toalla caliente, navaja y aceite premium.',
    tag: 'Premium',
  },
  {
    name: 'Beard Sculpt',
    category: 'Barba',
    price: '$9',
    time: '25 min',
    desc: 'Perfilado, simetría, líneas limpias y acabado hidratante.',
  },
  {
    name: 'Facial Reset',
    category: 'Tratamiento',
    price: '$14',
    time: '30 min',
    desc: 'Limpieza facial masculina, vapor, exfoliación y mascarilla calmante.',
  },
  {
    name: 'Hair Therapy',
    category: 'Tratamiento',
    price: '$10',
    time: '20 min',
    desc: 'Hidratación capilar, control de frizz y brillo natural.',
  },
  {
    name: 'Color Craft',
    category: 'Color',
    price: 'Desde $25',
    time: '60 min',
    desc: 'Diseños de color, platinados, tonos fantasía y asesoría de mantenimiento.',
  },
]

const barbers = [
  {
    name: 'Marco Santoro',
    role: 'Master Barber',
    specialty: 'Clásicos, tijera y ejecutivos',
    image: '/img/barbero-corte-tijera-1.jpg',
    alt: 'Marco Santoro cortando el cabello de un cliente con tijera y peine',
    rating: '4.98',
  },
  {
    name: 'Andrés Leal',
    role: 'Fade Specialist',
    specialty: 'Low fade, taper y texturizados',
    image: '/img/barbero-fade-clipper-1.jpg',
    alt: 'Andrés Leal marcando un fade con la máquina a un cliente',
    rating: '4.96',
  },
  {
    name: 'Gabriel Rojas',
    role: 'Beard Artist',
    specialty: 'Barba, navaja y ritual caliente',
    image: '/img/foto-15993514312021.jpg',
    alt: 'Gabriel Rojas perfilando la barba de un cliente con la navaja',
    rating: '4.97',
  },
]

const memberships = [
  ['Essential', '$28/mes', '2 cortes mensuales', 'Prioridad en agenda'],
  ['Executive', '$45/mes', '2 cortes + 2 barbas', 'Bebida premium incluida', true],
  ['Society', '$65/mes', 'Visitas ilimitadas seleccionadas', 'Barbero preferente'],
]

const reviews = [
  {
    name: 'Carlos Mendoza',
    text: 'No parece una barbería cualquiera. Desde que entras se siente premium y el corte queda exacto.',
  },
  {
    name: 'José Ramírez',
    text: 'El ritual de barba con toalla caliente es otro nivel. Buena música, puntualidad y cero improvisación.',
  },
  {
    name: 'Miguel Andrade',
    text: 'Reservo por WhatsApp y llego directo a la silla. Ese detalle me gana todas las semanas.',
  },
]

const horario = [
  ['Horario', 'Lun a Sáb · 9:00 - 20:00'],
  ['Domingo', 'Cerrado'],
  ['Pagos', 'Pago móvil, Zelle y efectivo'],
  ['Reservas', 'WhatsApp · sin espera en recepción'],
]

const guia = 'hidden h-0 flex-1 border-b border-dotted sm:block'

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const activa = useSeccionActiva(enlaces.map(([id]) => id))
  const fotoHero = useRef(null)

  useParallax(fotoHero)
  const revelarTalon = useRevelar()
  const revelarBarberos = useRevelarHijos()
  const revelarMembresias = useRevelarHijos()
  const revelarCitas = useRevelar()
  const revelarUbicacion = useRevelarHijos()

  useEffect(() => {
    activarMotion()
    const destino = window.location.hash.slice(1)
    if (!destino) return
    const seccion = document.getElementById(destino)
    if (typeof seccion?.scrollIntoView !== 'function') return
    seccion.scrollIntoView({ block: 'start', behavior: 'instant' })
    const reanudar = () => seccion.scrollIntoView({ block: 'start', behavior: 'instant' })
    window.addEventListener('load', reanudar, { once: true, passive: true })
    return () => window.removeEventListener('load', reanudar)
  }, [])

  const filteredServices = useMemo(() => {
    if (activeFilter === 'Todos') return services
    return services.filter((service) => service.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[#11100e] text-[#f4eadc] antialiased">
      <SaltarAlContenido className="focus:bg-[#d39b55] focus:text-[#15110d]" />

      <header className="sticky top-0 z-50 border-b border-[#d39b55]/30 bg-[#11100e]/92 backdrop-blur-xl">
        <TiraPole className="h-2 w-full" />
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:gap-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Noble Barber Society inicio">
            <span className="relative grid h-11 w-11 shrink-0 place-items-center border border-[#d39b55] bg-[#1b1713] font-serif text-lg font-black text-[#d39b55] sm:h-12 sm:w-12 sm:text-xl">
              <span aria-hidden="true" className="absolute inset-[3px] border border-[#d39b55]/40" />
              NB
            </span>
            <span className="whitespace-nowrap">
              <span className="block font-serif text-lg font-black uppercase tracking-[0.14em] sm:text-xl">Noble Barber</span>
              <span className="hidden text-[10px] font-black uppercase tracking-[0.3em] text-[#d39b55] sm:block">Society Studio</span>
            </span>
          </a>

          <nav aria-label="Principal" className="ml-auto hidden items-center gap-7 text-xs font-black uppercase tracking-[0.16em] text-[#f4eadc]/70 lg:flex">
            {enlaces.map(([id, texto]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activa === id ? 'true' : undefined}
                className={`border-b-2 py-2 transition hover:text-[#d39b55] ${activa === id ? 'border-[#d39b55] text-[#f4eadc]' : 'border-transparent'}`}
              >
                {texto}
              </a>
            ))}
          </nav>

          <a href={wa('Hola, quiero reservar una cita en Noble Barber.')} className="ml-auto hidden shrink-0 border border-[#d39b55] bg-[#d39b55] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#15110d] transition hover:bg-[#f4eadc] hover:border-[#f4eadc] active:translate-y-px sm:inline-flex lg:ml-0">
            Reservar
          </a>
          <MenuMovil
            enlaces={enlaces}
            activa={activa}
            cta={{ href: wa('Hola, quiero reservar una cita en Noble Barber.'), texto: 'Reservar cita' }}
            tono={{
              boton: 'border border-[#d39b55]/50 text-[#d39b55]',
              panel: 'border-[#d39b55]/30 bg-[#11100e] text-[#f4eadc]',
              activo: 'text-[#d39b55]',
              cta: 'bg-[#d39b55] text-[#15110d]',
            }}
          />
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative isolate overflow-hidden bg-[#0f0e0c]">
          <img
            ref={fotoHero}
            src="/img/barbero-sillon-cliente-1.jpg"
            alt="Barbero cortando el pelo de un cliente en el sillón de Noble Barber"
            className="foto-parallax absolute inset-0 -z-20 h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,14,12,.9)_0%,rgba(15,14,12,.68)_45%,#0f0e0c_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(211,155,85,.22),transparent_62%)]" />

          <div className="mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:px-5 lg:px-8">
            <p className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#d39b55]">
              <span aria-hidden="true" className="hidden h-px w-10 bg-[#d39b55]/50 sm:block" />
              Barbería clásica · Punto Fijo, Falcón
              <span aria-hidden="true" className="hidden h-px w-10 bg-[#d39b55]/50 sm:block" />
            </p>

            <div className="relative mt-8 w-full border border-[#d39b55]/45 bg-[#14120f]/95 shadow-[0_46px_90px_-40px_rgba(0,0,0,.95)]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-2 border border-[#d39b55]/20" />
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-3 overflow-hidden sm:w-4">
                <TiraPole vertical className="h-full w-full" />
              </span>
              <span aria-hidden="true" className="absolute inset-y-0 right-0 w-3 overflow-hidden sm:w-4">
                <TiraPole vertical className="h-full w-full" />
              </span>
              <span aria-hidden="true" className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rotate-45 bg-[#d39b55]" />
              <span aria-hidden="true" className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rotate-45 bg-[#d39b55]" />
              <span aria-hidden="true" className="absolute bottom-1.5 left-1.5 h-1.5 w-1.5 rotate-45 bg-[#d39b55]" />
              <span aria-hidden="true" className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rotate-45 bg-[#d39b55]" />

              <div className="relative px-7 py-12 sm:px-16 sm:py-14">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4eadc]/65">Society Studio</p>
                <div className="mx-auto mt-6 flex max-w-md items-center gap-4 text-[#d39b55]">
                  <span aria-hidden="true" className="h-px flex-1 bg-current opacity-50" />
                  <span className="text-[10px] font-black uppercase tracking-[0.34em]">Est. 2015</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-current opacity-50" />
                </div>

                <h1 className="mt-7 font-serif text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#f4eadc] sm:text-7xl lg:text-8xl">
                  Noble Barber
                </h1>
                <p className="mt-4 font-serif text-xl italic text-[#d39b55] sm:text-2xl">Tu corte también habla por ti</p>
                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#f4eadc]/75 sm:text-lg">
                  Cortes de precisión, ritual de barba, cuidado facial y styling masculino en un estudio con agenda, oficio y carácter.
                </p>

                <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
                  <a href={wa('Hola, quiero reservar una cita en Noble Barber.')} className="inline-flex items-center justify-center bg-[#d39b55] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#f4eadc] hover:shadow-[0_18px_34px_-18px_rgba(211,155,85,.75)]">
                    Reservar cita
                  </a>
                  <a href="#servicios" className="inline-flex items-center justify-center border border-[#f4eadc]/35 px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#f4eadc] transition hover:-translate-y-0.5 hover:border-[#d39b55] hover:text-[#d39b55]">
                    Ver el talón
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 divide-x divide-[#d39b55]/25 border-y border-dashed border-[#d39b55]/40">
                  {[
                    { valor: 8, sufijo: '+', etiqueta: 'años de oficio' },
                    { valor: 4.9, decimales: 1, etiqueta: 'de 5 estrellas' },
                    { valor: 6, sufijo: 'k+', etiqueta: 'clientes' },
                  ].map(({ valor, decimales, sufijo, etiqueta }) => (
                    <div key={etiqueta} className="px-2 py-4">
                      <strong className="tabular block font-serif text-2xl font-black text-[#d39b55] sm:text-3xl">
                        <Contador valor={valor} decimales={decimales} sufijo={sufijo} />
                      </strong>
                      <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.16em] text-[#f4eadc]/65 sm:text-[10px]">{etiqueta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-7 text-[11px] font-black uppercase tracking-[0.24em] text-[#f4eadc]/60">
              Av. Táchira con calle Comercio, Local 8
            </p>
          </div>
        </section>

        <DivisorPole />

        <section id="servicios" className="bg-[#11100e] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Rotulo
              antetitulo="Menú de servicios"
              titulo="Precisión, ritual y acabado"
              texto="Cada servicio con su duración y precio cerrados. Eliges, reservas por WhatsApp y llegas directo a la silla."
            />

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`shrink-0 border px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] transition ${
                    activeFilter === filter
                      ? 'border-[#d39b55] bg-[#d39b55] text-[#15110d]'
                      : 'border-[#f4eadc]/30 text-[#f4eadc]/75 hover:border-[#d39b55] hover:text-[#d39b55]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div ref={revelarTalon} className="relative mt-12 shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
              <div aria-hidden="true" className="papel perforacion" />
              <div className="papel px-5 pb-9 pt-8 sm:px-10 sm:pb-11 sm:pt-10">
                <div className="text-center">
                  <p className="font-serif text-2xl font-black uppercase tracking-[0.14em] sm:text-3xl">Noble Barber Society</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#7a4f1f]">
                    Av. Táchira con calle Comercio · Local 8
                  </p>
                  <div className="mx-auto mt-5 max-w-md border-t-4 border-double border-[#15110d]/70" />
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.24em]">Talón de servicios · precios en dólares</p>
                </div>

                <ul className="mt-7">
                  {filteredServices.map((service) => (
                    <li
                      key={service.name}
                      className="-mx-2 border-b border-dashed border-[#c9b69c] px-2 py-5 transition-colors last:border-b-0 hover:bg-[#15110d]/[0.05] sm:py-6"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <h3 className="font-serif text-xl font-black uppercase leading-tight sm:text-2xl">{service.name}</h3>
                        {service.tag && (
                          <span className="border border-[#7a4f1f]/70 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#7a4f1f]">
                            {service.tag}
                          </span>
                        )}
                        <span aria-hidden="true" className={`${guia} border-[#a9927a]`} />
                        <strong className="tabular ml-auto shrink-0 whitespace-nowrap font-serif text-2xl font-black sm:ml-0">
                          {service.price}
                        </strong>
                      </div>
                      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm leading-6 text-[#5f5042] sm:max-w-[32rem]">{service.desc}</p>
                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                          <span className="tabular text-[11px] font-black uppercase tracking-[0.14em] text-[#7a4f1f]">
                            {service.category} · {service.time}
                          </span>
                          <a
                            href={wa(`Hola, quiero reservar ${service.name} (${service.time}, ${service.price}).`)}
                            aria-label={`Reservar ${service.name}`}
                            className="shrink-0 border border-[#15110d] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#15110d] hover:text-[#f7f1e6]"
                          >
                            Reservar
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t-2 border-dashed border-[#15110d]/35 pt-7 text-center">
                  <p className="font-serif text-xl font-black uppercase tracking-[0.06em] sm:text-2xl">Gracias por visitarnos</p>
                  <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#5f5042]">
                    Bebida de cortesía en cada visita. Reserva por WhatsApp y llega directo a la silla.
                  </p>
                  <a
                    href={wa('Hola, quiero reservar una cita en Noble Barber.')}
                    className="mt-6 inline-flex items-center justify-center bg-[#15110d] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#f7f1e6] transition hover:-translate-y-0.5 hover:bg-[#d39b55] hover:text-[#15110d] hover:shadow-[0_16px_30px_-16px_rgba(21,17,13,.9)]"
                  >
                    Reservar cita
                  </a>
                </div>
              </div>
              <div aria-hidden="true" className="papel perforacion" />
            </div>
          </div>
        </section>

        <DivisorPole />

        <SeccionCorte />

        <DivisorPole />

        <section id="barberos" className="bg-[#f4eadc] py-20 text-[#15110d] sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Rotulo
              antetitulo="Los artistas"
              titulo="Cada silla tiene firma propia"
              texto="Tres estilos distintos. Dinos con quién quieres sentarte y te guardamos su próximo hueco."
              tono="claro"
            />

            <div ref={revelarBarberos} className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {barbers.map((barber, i) => (
                <article
                  key={barber.name}
                  data-revelar
                  className={`group transition hover:-translate-y-2 ${i === 1 ? 'lg:mt-14' : ''}`}
                >
                  <div className="relative border-[6px] border-[#15110d] bg-[#15110d] shadow-[0_28px_54px_-28px_rgba(21,17,13,.7)] transition duration-500 group-hover:shadow-[0_40px_70px_-30px_rgba(21,17,13,.85)]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={barber.image}
                        alt={barber.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#15110d]/70 via-transparent to-transparent" />
                      <span className="tabular absolute bottom-3 right-3 bg-[#d39b55] px-2.5 py-1 text-[11px] font-black text-[#15110d]">
                        ★ {barber.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 border-t-2 border-[#15110d] pt-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#7a4f1f]">{barber.role}</p>
                    <h3 className="mt-2 font-serif text-2xl font-black uppercase sm:text-3xl">{barber.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f5042]">{barber.specialty}</p>
                    <a
                      href={wa(`Hola, quiero una cita con ${barber.name}.`)}
                      className="mt-5 inline-flex items-center gap-2 border-b-2 border-[#d39b55] pb-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#15110d] transition hover:border-[#15110d]"
                    >
                      Reservar con {barber.name.split(' ')[0]}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DivisorPole />

        <section id="membresias" className="bg-[#11100e] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Rotulo
              antetitulo="Club de clientes"
              titulo="Membresías para verse bien siempre"
              texto="Planes mensuales con cita priorizada, cortes programados y detalles de la casa."
            />

            <div ref={revelarMembresias} className="mt-14 grid gap-6 md:grid-cols-3">
              {memberships.map(([name, price, perk1, perk2, recomendado]) => (
                <article
                  key={name}
                  data-revelar
                  className={`relative flex flex-col border p-7 transition hover:-translate-y-2 sm:p-8 ${
                    recomendado
                      ? 'border-[#d39b55] bg-[#d39b55] text-[#15110d] shadow-[0_34px_64px_-32px_rgba(211,155,85,.55)] hover:shadow-[0_44px_74px_-32px_rgba(211,155,85,.7)] md:-my-3 md:py-11'
                      : 'border-[#d39b55]/35 bg-[#17140f] hover:border-[#d39b55] hover:shadow-[0_34px_60px_-32px_rgba(0,0,0,.9)]'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-7 top-0 h-px ${recomendado ? 'bg-[#15110d]/40' : 'bg-[#d39b55]/60'}`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <p className={`text-[10px] font-black uppercase tracking-[0.26em] ${recomendado ? 'text-[#15110d]/85' : 'text-[#d39b55]'}`}>
                      {recomendado ? 'El más elegido' : 'Plan'}
                    </p>
                    <span aria-hidden="true" className={`font-serif text-xl font-black ${recomendado ? 'text-[#15110d]/50' : 'text-[#f4eadc]/25'}`}>
                      NB
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-4xl font-black uppercase">{name}</h3>
                  <strong className="tabular mt-4 block font-serif text-4xl font-black">{price}</strong>
                  <ul className={`mt-7 mb-7 space-y-3 text-sm font-bold ${recomendado ? 'text-[#15110d]/85' : 'text-[#f4eadc]/75'}`}>
                    <li>✓ {perk1}</li>
                    <li>✓ {perk2}</li>
                    <li>✓ Recordatorio de cita por WhatsApp</li>
                  </ul>
                  <div
                    className={`mt-auto border-t border-dashed pt-4 text-[10px] font-black uppercase tracking-[0.2em] ${
                      recomendado ? 'border-[#15110d]/40 text-[#15110d]/85' : 'border-[#d39b55]/30 text-[#f4eadc]/65'
                    }`}
                  >
                    Club Noble · Punto Fijo
                  </div>
                  <a
                    href={wa(`Hola, quiero la membresía ${name} (${price}).`)}
                    className={`mt-5 inline-flex w-full justify-center px-5 py-3.5 text-sm font-black uppercase tracking-[0.14em] transition active:translate-y-px ${
                      recomendado
                        ? 'bg-[#15110d] text-[#f4eadc] hover:bg-[#1b1713]'
                        : 'bg-[#d39b55] text-[#15110d] hover:bg-[#f4eadc]'
                    }`}
                  >
                    Quiero {name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DivisorPole />

        <section className="bg-[#f4eadc] py-20 text-[#15110d] sm:py-24">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Rotulo antetitulo="Citas de la casa" titulo="Lo que se dice en la silla" tono="claro" />
            <p className="mt-5 text-center text-[11px] font-black uppercase tracking-[0.24em] text-[#7a4f1f]">
              <span className="tabular"><Contador valor={4.9} decimales={1} /></span> de 5 · más de{' '}
              <span className="tabular"><Contador valor={600} /></span> reseñas
            </p>

            <div ref={revelarCitas} className="mt-14 space-y-11">
              {reviews.map((review) => (
                <figure key={review.name} className="border-t border-[#c9b69c] pt-10 first:border-t-0 first:pt-0">
                  <blockquote className="relative font-serif text-2xl leading-snug sm:text-3xl">
                    <span aria-hidden="true" className="absolute -left-1 -top-8 select-none font-serif text-7xl leading-none text-[#d39b55]">
                      “
                    </span>
                    {review.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#7a4f1f]">
                    <span aria-hidden="true" className="h-px w-8 bg-[#15110d]/40" />
                    {review.name} · cliente de la casa
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <DivisorPole />

        <section id="ubicacion" className="bg-[#11100e] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Rotulo
              antetitulo="Dónde estamos"
              titulo="Llega, siéntate y sal distinto"
              texto="Atención con cita para reducir esperas. Reserva por WhatsApp y te confirmamos la hora en minutos."
            />

            <div ref={revelarUbicacion} className="mt-14 grid overflow-hidden border border-[#d39b55]/35 bg-[#17140f] lg:grid-cols-2">
              <div data-revelar className="p-8 sm:p-12 lg:p-14">
                <p className="text-lg leading-8 text-[#f4eadc]/80 sm:text-xl">
                  Av. Táchira con calle Comercio, Local 8. Punto Fijo, Falcón.
                </p>

                <dl className="mt-9 space-y-4 text-sm">
                  {horario.map(([term, dato]) => (
                    <div key={term} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <dt className="text-[11px] font-black uppercase tracking-[0.16em] text-[#d39b55]">{term}</dt>
                      <span aria-hidden="true" className={`${guia} border-[#d39b55]/45`} />
                      <dd className="tabular font-semibold text-[#f4eadc]/85">{dato}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={wa('Hola, quiero reservar una cita en Noble Barber.')}
                    className="inline-flex items-center justify-center bg-[#d39b55] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#f4eadc] hover:shadow-[0_16px_30px_-16px_rgba(211,155,85,.6)]"
                  >
                    Reservar por WhatsApp
                  </a>
                  <BotonComoLlegar />
                </div>
              </div>

              <div data-revelar className="flex items-center border-t border-[#d39b55]/25 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-9">
                <MapaUbicacion />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#11100e] text-white">
        <TiraPole className="h-2 w-full" />
        <div className="py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="relative grid h-11 w-11 shrink-0 place-items-center border border-[#d39b55] font-serif text-sm font-black text-[#d39b55]">
                  <span aria-hidden="true" className="absolute inset-[3px] border border-[#d39b55]/40" />
                  NB
                </span>
                <div>
                  <span className="block font-serif text-xl font-black uppercase tracking-[0.14em]">Noble Barber</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d39b55]">Society Studio</span>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                Cortes, barba, tratamientos y color con cita previa en Punto Fijo. Llegas a la hora y te sientas.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em]">Servicios</h3>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-white/70">
                <li><a href="#servicios" className="transition hover:text-[#d39b55]">Cortes</a></li>
                <li><a href="#servicios" className="transition hover:text-[#d39b55]">Barba</a></li>
                <li><a href="#membresias" className="transition hover:text-[#d39b55]">Membresías</a></li>
                <li><a href="#barberos" className="transition hover:text-[#d39b55]">Barberos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em]">Contacto</h3>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-white/70">
                <li>Punto Fijo, Falcón</li>
                <li><a href={wa()} className="transition hover:text-[#d39b55]">WhatsApp: +58 412-000-0000</a></li>
                <li>Agenda: 9:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 px-5 pt-7 text-center text-xs font-semibold text-white/60 lg:px-8">
            © 2026 Noble Barber Society. Demo creada por Carlos Avila - Developer 🇻🇪 ·{' '}
            <a href="/privacidad/" className="underline underline-offset-2 transition hover:text-[#d39b55]">Privacidad</a>
          </div>
        </div>
      </footer>

      <WhatsAppFlotante texto="Hola, quiero reservar una cita en Noble Barber." className="bg-[#d39b55] text-[#15110d]" />
    </div>
  )
}

export default App

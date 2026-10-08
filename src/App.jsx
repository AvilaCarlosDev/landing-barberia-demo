import { useMemo, useState } from 'react'
import { MenuMovil, SaltarAlContenido, WhatsAppFlotante } from './sitio.jsx'
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
    image: '/img/foto-15993514312021.jpg',
    desc: 'Diagnóstico de estilo, corte de precisión, lavado y styling final.',
    tag: 'Popular',
  },
  {
    name: 'Corte + Barba Ritual',
    category: 'Barba',
    price: '$20',
    time: '55 min',
    image: '/img/foto-15623221408bae.jpg',
    desc: 'Fade personalizado, barba con toalla caliente, navaja y aceite premium.',
    tag: 'Premium',
  },
  {
    name: 'Beard Sculpt',
    category: 'Barba',
    price: '$9',
    time: '25 min',
    image: '/img/foto-1621605815971f.jpg',
    desc: 'Perfilado, simetría, líneas limpias y acabado hidratante.',
  },
  {
    name: 'Facial Reset',
    category: 'Tratamiento',
    price: '$14',
    time: '30 min',
    image: '/img/facial-treatment.jpg',
    desc: 'Limpieza facial masculina, vapor, exfoliación y mascarilla calmante.',
  },
  {
    name: 'Hair Therapy',
    category: 'Tratamiento',
    price: '$10',
    time: '20 min',
    image: '/img/hair-treatment.jpg',
    desc: 'Hidratación capilar, control de frizz y brillo natural.',
  },
  {
    name: 'Color Craft',
    category: 'Color',
    price: 'Desde $25',
    time: '60 min',
    image: '/img/foto-16054977880445.jpg',
    desc: 'Diseños de color, platinados, tonos fantasía y asesoría de mantenimiento.',
  },
]

const barbers = [
  {
    name: 'Marco Santoro',
    role: 'Master Barber',
    specialty: 'Clásicos, tijera y ejecutivos',
    image: '/img/foto-15857478607152.jpg',
    rating: '4.98',
  },
  {
    name: 'Andrés Leal',
    role: 'Fade Specialist',
    specialty: 'Low fade, taper y texturizados',
    image: '/img/foto-15623221408bae.jpg',
    rating: '4.96',
  },
  {
    name: 'Gabriel Rojas',
    role: 'Beard Artist',
    specialty: 'Barba, navaja y ritual caliente',
    image: '/img/foto-1621605815971f.jpg',
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

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const activa = useSeccionActiva(enlaces.map(([id]) => id))

  const filteredServices = useMemo(() => {
    if (activeFilter === 'Todos') return services
    return services.filter((service) => service.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[#11100e] text-[#f4eadc] antialiased">
      <SaltarAlContenido className="focus:bg-[#d39b55] focus:text-[#15110d]" />
      <div className="bg-[#d39b55] text-[11px] font-black uppercase tracking-[0.2em] text-[#15110d]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-8 px-5 py-2.5 md:justify-between">
          <span>Barbería premium en Punto Fijo</span>
          <span className="hidden md:inline">Reservas por WhatsApp</span>
          <span className="hidden md:inline">Bebida de cortesía</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11100e]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:gap-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Noble Barber Society inicio">
            <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d39b55] bg-[#1b1713] font-serif text-lg font-black text-[#d39b55] sm:h-12 sm:w-12 sm:text-xl">NB</span>
            <span className="whitespace-nowrap">
              <span className="block font-serif text-lg font-black uppercase tracking-[0.12em] sm:text-xl">Noble Barber</span>
              <span className="hidden text-[11px] font-black uppercase tracking-[0.22em] text-[#d39b55] sm:block">Society Studio</span>
            </span>
          </a>

          <nav aria-label="Principal" className="ml-auto hidden items-center gap-7 text-sm font-black text-[#f4eadc]/62 lg:flex">
            {enlaces.map(([id, texto]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activa === id ? 'true' : undefined}
                className={`border-b-2 py-1 transition hover:text-[#d39b55] ${activa === id ? 'border-[#d39b55] text-[#f4eadc]' : 'border-transparent'}`}
              >
                {texto}
              </a>
            ))}
          </nav>

          <a href={wa('Hola, quiero reservar una cita en Noble Barber.')} className="ml-auto hidden shrink-0 rounded-none bg-[#d39b55] px-5 py-3 text-sm font-black sm:inline-flex uppercase tracking-wide text-[#15110d] transition hover:bg-[#f4eadc] active:translate-y-px lg:ml-0">
            Reservar
          </a>
          <MenuMovil
            enlaces={enlaces}
            activa={activa}
            cta={{ href: wa('Hola, quiero reservar una cita en Noble Barber.'), texto: 'Reservar cita' }}
            tono={{
              boton: 'border border-white/15 text-[#f4eadc]',
              panel: 'border-white/10 bg-[#11100e] text-[#f4eadc]',
              activo: 'text-[#d39b55]',
              cta: 'bg-[#d39b55] text-[#15110d]',
            }}
          />
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="relative isolate overflow-hidden">
          <img
            src="/img/foto-15857478607152.jpg"
            alt="Interior de barbería premium"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-32"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_18%,rgba(211,155,85,.28),transparent_24%),linear-gradient(105deg,#11100e_0%,rgba(17,16,14,.96)_48%,rgba(17,16,14,.45)_100%)]" />
          <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="max-w-3xl pt-8">
              <div className="mb-7 inline-flex border border-[#d39b55]/35 bg-[#d39b55]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#d39b55]">
                Premium men grooming · desde 2015
              </div>
              <h1 className="font-serif text-6xl font-black uppercase leading-[0.9] tracking-[-0.015em] text-[#f4eadc] sm:text-7xl lg:text-8xl">
                Tu corte también habla por ti
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f4eadc]/62 sm:text-xl">
                Cortes de precisión, ritual de barba, cuidado facial y styling masculino en un estudio con agenda, oficio y carácter.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={wa('Hola, quiero reservar una cita en Noble Barber.')} className="inline-flex items-center justify-center bg-[#d39b55] px-8 py-4 text-base font-black uppercase tracking-wide text-[#15110d] transition hover:bg-[#f4eadc]">
                  Reservar cita
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-white/10">
                  Ver menú
                </a>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 border border-white/10 bg-white/[0.04]">
                {[
                  ['8+', 'años'],
                  ['4.9★', 'rating'],
                  ['6k+', 'clientes'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 p-5 last:border-r-0">
                    <strong className="block font-serif text-3xl font-black text-[#d39b55]">{value}</strong>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white/42">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[580px] lg:block">
              <div className="absolute right-0 top-5 w-[23rem] border border-white/10 bg-[#1b1713] p-4 shadow-2xl shadow-black/40">
                <img src="/img/foto-15993514312021.jpg" alt="Barbero cortando cabello" className="h-80 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d39b55]">Servicio recomendado</p>
                  <h2 className="mt-2 font-serif text-3xl font-black uppercase">Corte + Barba Ritual</h2>
                  <div className="mt-5 flex items-end justify-between">
                    <span className="text-sm font-bold text-white/50">55 min · toalla caliente</span>
                    <strong className="font-serif text-3xl text-[#d39b55]">$20</strong>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-40 max-w-[15rem] border border-[#d39b55]/25 bg-[#d39b55] p-7 text-[#15110d] shadow-2xl shadow-black/30">
                <p className="font-serif text-2xl font-black uppercase leading-tight">Agenda sin esperar en recepción</p>
                <p className="mt-4 text-sm font-bold opacity-70">Reserva por WhatsApp y llega directo a la silla.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#f4eadc] py-24 text-[#15110d]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9d6932]">Menú de servicios</p>
                <h2 className="mt-3 max-w-3xl font-serif text-5xl font-black uppercase tracking-[-0.015em] sm:text-6xl">Precisión, ritual y acabado</h2>
              </div>
              <p className="max-w-md text-base font-medium leading-7 text-[#5f5042]">Cada servicio con su duración y precio cerrados. Eliges, reservas por WhatsApp y llegas directo a la silla.</p>
            </div>

            <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 border px-5 py-2.5 text-sm font-black uppercase tracking-wide transition ${activeFilter === filter ? 'border-[#15110d] bg-[#15110d] text-white' : 'border-[#cdbba5] bg-transparent text-[#5f5042] hover:border-[#15110d]'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <article key={service.name} className="group flex flex-col overflow-hidden border border-[#d9c9b4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#15110d]">
                    <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {service.tag && <span className="absolute left-4 top-4 bg-[#d39b55] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#15110d]">{service.tag}</span>}
                    <span className="absolute bottom-4 right-4 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#15110d]">{service.time}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6932]">{service.category}</p>
                    <h3 className="mt-2 font-serif text-3xl font-black uppercase tracking-[-0.01em]">{service.name}</h3>
                    <p className="mt-3 mb-6 text-sm font-medium leading-6 text-[#5f5042]">{service.desc}</p>
                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#eadccc] pt-5">
                      <strong className="tabular font-serif text-3xl font-black">{service.price}</strong>
                      <a href={wa(`Hola, quiero reservar ${service.name} (${service.time}, ${service.price}).`)} aria-label={`Reservar ${service.name}`} className="bg-[#15110d] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#d39b55] hover:text-[#15110d]">
                        Reservar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="barberos" className="bg-[#11100e] py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d39b55]">Los artistas</p>
                <h2 className="mt-3 max-w-3xl font-serif text-5xl font-black uppercase tracking-[-0.015em] sm:text-6xl">Cada silla tiene firma propia</h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-white/55">Tres estilos distintos. Dinos con quién quieres sentarte y te guardamos su próximo hueco.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {barbers.map((barber) => (
                <article key={barber.name} className="group overflow-hidden border border-white/10 bg-white/[0.04]">
                  <div className="relative h-96 overflow-hidden">
                    <img src={barber.image} alt={barber.name} className="h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-transparent" />
                    <span className="absolute right-4 top-4 bg-[#d39b55] px-3 py-1.5 text-xs font-black text-[#15110d]">★ {barber.rating}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d39b55]">{barber.role}</p>
                    <h3 className="mt-2 font-serif text-3xl font-black uppercase">{barber.name}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/50">{barber.specialty}</p>
                    <a href={wa(`Hola, quiero una cita con ${barber.name}.`)} className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#d39b55] transition hover:gap-3 hover:text-[#f4eadc]">
                      Reservar con {barber.name.split(' ')[0]} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="membresias" className="bg-[#d39b55] py-24 text-[#15110d]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.24em] opacity-70">Club de clientes</p>
              <h2 className="mt-3 font-serif text-5xl font-black uppercase tracking-[-0.015em] sm:text-6xl">Membresías para verse bien siempre</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {memberships.map(([name, price, perk1, perk2, recomendado]) => (
                <article key={name} className={`relative flex flex-col border p-7 shadow-xl shadow-[#15110d]/10 ${recomendado ? 'border-[#15110d] bg-[#15110d] text-[#f4eadc] md:-my-4 md:py-11' : 'border-[#15110d]/15 bg-[#f4eadc]'}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.2em] ${recomendado ? 'text-[#d39b55]' : 'text-[#9d6932]'}`}>{recomendado ? 'El más elegido' : 'Plan'}</p>
                  <h3 className="mt-3 font-serif text-4xl font-black uppercase">{name}</h3>
                  <strong className="tabular mt-5 block font-serif text-4xl font-black">{price}</strong>
                  <ul className={`mt-7 mb-8 space-y-3 text-sm font-bold ${recomendado ? 'text-[#f4eadc]/70' : 'text-[#5f5042]'}`}>
                    <li>✓ {perk1}</li>
                    <li>✓ {perk2}</li>
                    <li>✓ Recordatorio de cita por WhatsApp</li>
                  </ul>
                  <a href={wa(`Hola, quiero la membresía ${name} (${price}).`)} className={`mt-auto inline-flex w-full justify-center px-5 py-3 text-sm font-black uppercase tracking-wide transition active:translate-y-px ${recomendado ? 'bg-[#d39b55] text-[#15110d] hover:bg-[#f4eadc]' : 'bg-[#15110d] text-white hover:bg-[#9d6932]'}`}>
                    Quiero {name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4eadc] py-24 text-[#15110d]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-2xl font-serif text-5xl font-black uppercase tracking-[-0.015em]">Lo que se dice en la silla</h2>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9d6932]"><span className="tabular">4.9</span> de 5 · más de 600 reseñas</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name} className="border border-[#d9c9b4] bg-white p-7">
                  <div className="mb-6 text-[#d39b55]" aria-label="5 de 5 estrellas">★★★★★</div>
                  <p className="text-base font-medium leading-8 text-[#5f5042]">“{review.text}”</p>
                  <strong className="mt-7 block font-serif text-xl font-black uppercase">{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="bg-[#11100e] px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-white/10 bg-white/[0.04] lg:grid-cols-[1fr_1fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d39b55]">Dónde estamos</p>
              <h2 className="mt-4 max-w-2xl font-serif text-5xl font-black uppercase tracking-[-0.015em] sm:text-6xl">Llega, siéntate y sal distinto</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Av. Táchira con calle Comercio, Local 8. Punto Fijo, Falcón. Atención con cita para reducir esperas.</p>
              <div className="mt-9 grid gap-3 text-sm font-semibold text-white/62 sm:grid-cols-2">
                <span>✓ Lun-Sáb: 9:00 AM - 8:00 PM</span>
                <span>✓ Bebida de cortesía</span>
                <span>✓ Pago móvil, Zelle y efectivo</span>
                <span>✓ Reservas por WhatsApp</span>
              </div>
              <a href={wa('Hola, quiero reservar una cita en Noble Barber.')} className="mt-9 inline-flex bg-[#d39b55] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#15110d] transition hover:bg-[#f4eadc]">
                Reservar por WhatsApp
              </a>
            </div>
            <div className="relative min-h-[430px]">
              <img src="/img/shop-interior.jpg" alt="Barbería elegante" className="absolute inset-0 h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/90 to-transparent" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#11100e] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-[#d39b55] text-sm font-black text-[#d39b55]">NB</span>
              <div>
                <span className="block font-serif text-xl font-black uppercase tracking-[0.12em]">Noble Barber</span>
                <span className="text-xs font-semibold text-white/40">Society Studio</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/45">Cortes, barba, tratamientos y color con cita previa en Punto Fijo. Llegas a la hora y te sientas.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Servicios</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/45">
              <li><a href="#servicios" className="hover:text-[#d39b55]">Cortes</a></li>
              <li><a href="#servicios" className="hover:text-[#d39b55]">Barba</a></li>
              <li><a href="#membresias" className="hover:text-[#d39b55]">Membresías</a></li>
              <li><a href="#barberos" className="hover:text-[#d39b55]">Barberos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/45">
              <li>Punto Fijo, Falcón</li>
              <li><a href={wa()} className="hover:text-[#d39b55]">WhatsApp: +58 412-000-0000</a></li>
              <li>Agenda: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-center text-xs font-semibold text-white/30 lg:px-8">
          © 2026 Noble Barber Society. Demo creada por Carlos Avila - Developer 🇻🇪 ·{' '}
          <a href="/privacidad/" className="underline underline-offset-2 hover:text-white/60">Privacidad</a>
        </div>
      </footer>
      <WhatsAppFlotante texto="Hola, quiero reservar una cita en Noble Barber." className="bg-[#d39b55] text-[#15110d]" />
    </div>
  )
}

export default App

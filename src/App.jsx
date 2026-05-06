import { useState } from 'react'

function App() {
  const servicios = [
    { name: 'Corte Clásico', price: '$10', time: '30 min', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80' },
    { name: 'Corte + Barba', price: '$16', time: '45 min', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80' },
    { name: 'Perfilado de Barba', price: '$8', time: '20 min', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80' },
    { name: 'Limpieza Facial', price: '$12', time: '25 min', img: 'https://images.unsplash.com/photo-1503951914875-befbb6470521?w=500&q=80' },
    { name: 'Hidratación Capilar', price: '$7', time: '15 min', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=500&q=80' },
    { name: 'Colorimetría', price: 'Consultar', time: '40 min', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80' },
  ]

  const barberos = [
    { name: 'Marco', role: 'Master Barber', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80' },
    { name: 'Andrés', role: 'Barber Specialist', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80' },
    { name: 'Gabriel', role: 'Style Expert', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80' },
    { name: 'Leo', role: 'Fade Master', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=400&q=80' },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-amber-600/30">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-3xl">✂️</div>
              <div>
                <span className="text-2xl font-black tracking-wide">NOBLE <span className="text-amber-500">BARBER</span></span>
                <p className="text-xs text-amber-500/70 tracking-widest uppercase">Studio</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#inicio" className="text-sm font-medium hover:text-amber-500 transition">Inicio</a>
              <a href="#servicios" className="text-sm font-medium hover:text-amber-500 transition">Servicios</a>
              <a href="#barberos" className="text-sm font-medium hover:text-amber-500 transition">Barberos</a>
              <a href="#ubicacion" className="text-sm font-medium hover:text-amber-500 transition">Ubicación</a>
            </nav>

            <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black px-7 py-3 rounded-full font-bold transition">
              Reservar
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero - Estilo Fígaro */}
        <section id="inicio" className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
          </div>

          <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-6 py-3 rounded-full mb-8">
                <span className="text-amber-500 text-xl">✂️</span>
                <span className="text-amber-500 font-bold text-sm tracking-wider">BARBERÍA PREMIUM</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Tu estilo merece<br/>
                <span className="text-amber-500">una experiencia única</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Cortes, barba y cuidado masculino en un espacio exclusivo. Bebida de cortesía incluida.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black px-10 py-5 rounded-full font-bold text-lg transition shadow-xl">
                  Reservar cita
                </a>
                <a href="#servicios" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition border-2 border-white/30">
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios - Grid con fotos */}
        <section id="servicios" className="py-24 bg-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-6">Menú de Servicios</span>
              <h2 className="text-5xl lg:text-6xl font-black mb-6">Nuestros Servicios</h2>
              <p className="text-lg text-gray-400">Todos incluyen bebida de cortesía</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicios.map((servicio, i) => (
                <div key={i} className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={servicio.img} alt={servicio.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{servicio.name}</h3>
                    <p className="text-gray-400 mb-6">{servicio.time}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-black text-amber-500">{servicio.price}</span>
                      <a href="https://wa.me/584120000000" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-bold transition">
                        Reservar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barberos */}
        <section id="barberos" className="py-24 bg-gray-950">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-6">Nuestro Equipo</span>
              <h2 className="text-5xl lg:text-6xl font-black mb-6">Conoce a los Barberos</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {barberos.map((barbero, i) => (
                <div key={i} className="group text-center">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-8 bg-gray-900 border border-gray-800">
                    <img src={barbero.img} alt={barbero.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{barbero.name}</h3>
                  <p className="text-amber-500 font-bold">{barbero.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section id="ubicacion" className="py-24 bg-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-10">Visítanos</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl">📍</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Ubicación</h3>
                      <p className="text-gray-400 text-lg">C.C. Plaza Norte, Nivel Terraza, Local 12<br/>Punto Fijo, Estado Falcón</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="text-4xl">🕒</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Horario</h3>
                      <p className="text-gray-400 text-lg">Lunes a Sábado: 9:00 AM - 8:00 PM<br/>Domingos y feriados: Cerrado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <span className="text-4xl">📞</span>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Contacto</h3>
                      <p className="text-gray-400 text-lg">WhatsApp: +58 412-000-0000<br/>Instagram: @noblebarberstudio</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-3xl flex items-center justify-center min-h-[500px] border border-gray-800">
                <div className="text-center">
                  <div className="text-8xl mb-6">🗺️</div>
                  <p className="text-gray-400 text-xl">Mapa de ubicación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-br from-amber-600 to-amber-800 text-black">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">¿Listo para un nuevo look?</h2>
            <p className="text-2xl mb-12">Agenda tu cita por WhatsApp y recibe atención personalizada</p>
            <a href="https://wa.me/584120000000" className="inline-flex items-center gap-4 bg-black text-amber-500 px-12 py-6 rounded-full font-bold text-2xl transition shadow-xl">
              <span>💬</span> Agenda por WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-amber-600/30">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-3xl">✂️</div>
                <div>
                  <span className="text-2xl font-black tracking-wide">NOBLE <span className="text-amber-500">BARBER</span></span>
                  <p className="text-xs text-amber-500/70 tracking-widest uppercase">Studio</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md text-lg">
                Barbería premium para hombres. Cortes, barba y cuidado masculino en un espacio exclusivo en Punto Fijo.
              </p>
            </div>

            <div>
              <h3 className="font-black text-xl mb-8">Servicios</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition">Corte Clásico</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Corte + Barba</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Perfilado</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Limpieza Facial</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-xl mb-8">Enlaces</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition">Barberos</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Galería</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2026 Noble Barber Studio. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/584120000000" className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition">
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App

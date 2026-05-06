import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('barberia')

  // Imágenes reales de Unsplash - Barbería y Peluquería
  const images = {
    hero1: 'https://source.unsplash.com/random/600x400/?barber,haircut', // Barbero
    hero2: 'https://source.unsplash.com/random/600x400/?barber,haircut', // Corte dama
    hero3: 'https://source.unsplash.com/random/600x400/?barber,haircut', // Barbería interior
    hero4: 'https://source.unsplash.com/random/600x400/?barber,haircut', // Barba
    barberia: {
      servicio1: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio2: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio3: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio4: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      equipo1: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      equipo2: 'https://source.unsplash.com/random/600x400/?barber,haircut',
    },
    peluqueria: {
      servicio1: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio2: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio3: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      servicio4: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      equipo1: 'https://source.unsplash.com/random/600x400/?barber,haircut',
      equipo2: 'https://source.unsplash.com/random/600x400/?barber,haircut',
    },
  }

  return (
    <div className="min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-2xl">💈</div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl -ml-4 relative z-10">✂️</div>
              </div>
              <div className="ml-6">
                <div className="text-2xl font-black tracking-wide">STYLE STUDIO</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Barbería & Peluquería</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#servicios" className="text-sm font-medium hover:text-amber-500 transition">SERVICIOS</a>
              <a href="#galeria" className="text-sm font-medium hover:text-amber-500 transition">GALERÍA</a>
              <a href="#equipo" className="text-sm font-medium hover:text-amber-500 transition">EQUIPO</a>
              <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-black px-8 py-3 font-bold transition transform hover:scale-105">
                RESERVAR
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-gradient-to-br from-amber-900/20 to-transparent"></div>
          <div className="bg-gradient-to-bl from-pink-900/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-gray-700 px-6 py-3 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold tracking-wide">ABIERTO AHORA • HASTA LAS 8PM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none mb-8">
                <span className="block">PARA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500">ÉL & ELLA</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-xl">
                El primer espacio en Punto Fijo donde convergen la barbería tradicional 
                y la peluquería moderna. Servicios profesionales para todos.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 text-center">
                  💈 Cita Caballeros
                </a>
                <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 text-center">
                  ✂️ Cita Damas
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div>
                  <div className="text-4xl font-black text-amber-500">20+</div>
                  <div className="text-gray-500 text-sm mt-1">AÑOS EXP.</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-pink-500">800+</div>
                  <div className="text-gray-500 text-sm mt-1">CLIENTES/MES</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-amber-500">4.9★</div>
                  <div className="text-gray-500 text-sm mt-1">CALIFICACIÓN</div>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={images.hero1} alt="Corte caballero" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img src={images.hero3} alt="Barbería interior" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img src={images.hero2} alt="Corte dama" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={images.hero4} alt="Perfilado de barba" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Stats */}
      <section className="bg-gray-900 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">+3K</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Cortes realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">4.9★</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">+10</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">100%</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Garantizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Nuestros Servicios</span>
            <h2 className="text-5xl lg:text-7xl font-black">PARA TODOS</h2>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-900 rounded-full p-2">
              <button
                onClick={() => setActiveTab('barberia')}
                className={`px-8 py-4 rounded-full font-bold transition ${
                  activeTab === 'barberia' ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                💈 BARBERÍA
              </button>
              <button
                onClick={() => setActiveTab('peluqueria')}
                className={`px-8 py-4 rounded-full font-bold transition ${
                  activeTab === 'peluqueria' ? 'bg-pink-500 text-white' : 'text-gray-400 hover:text-white'

      {/* Social Proof - Stats */}
      <section className="bg-gray-900 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">+3K</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Cortes realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">4.9★</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Clientes felices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">+10</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">100%</div>
              <div className="text-sm lg:text-base font-bold text-gray-400">Garantizado</div>
            </div>
          </div>
        </div>
      </section>
                }`}
              >
                ✂️ PELUQUERÍA
              </button>
            </div>
          </div>

          {activeTab === 'barberia' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Corte Clásico', price: '$10', time: '30 min', img: images.barberia.servicio1 },
                { name: 'Corte + Barba', price: '$15', time: '45 min', img: images.barberia.servicio2 },
                { name: 'Afeitado Premium', price: '$8', time: '20 min', img: images.barberia.servicio3 },
                { name: 'Fade / Degradado', price: '$12', time: '40 min', img: images.barberia.servicio4 },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-amber-500">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'peluqueria' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Corte Dama', price: '$15', time: '45 min', img: images.peluqueria.servicio1 },
                { name: 'Color / Tinte', price: '$40', time: '90 min', img: images.peluqueria.servicio2 },
                { name: 'Manicure', price: '$12', time: '40 min', img: images.peluqueria.servicio3 },
                { name: 'Peinado', price: '$25', time: '60 min', img: images.peluqueria.servicio4 },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-pink-500">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-20 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Nuestro Trabajo</span>
            <h2 className="text-5xl lg:text-7xl font-black">GALERÍA</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: images.hero1, tag: 'Caballeros' },
              { img: images.hero2, tag: 'Damas' },
              { img: images.hero4, tag: 'Barba' },
              { img: images.hero3, tag: 'Interior' },
            ].map((item, index) => (
              <div key={index} className={`group ${index === 0 || index === 3 ? 'lg:row-span-2' : ''}`}>
                <div className="aspect-square overflow-hidden rounded-xl relative">
                  <img src={item.img} alt={item.tag} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <span className="text-white font-bold text-sm">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Profesionales</span>
            <h2 className="text-5xl lg:text-7xl font-black">NUESTRO EQUIPO</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Carlos "El Maestro"', role: 'Barbero Senior', exp: '15 años', img: images.barberia.equipo1 },
              { name: 'María "Tijeras"', role: 'Estilista', exp: '12 años', img: images.peluqueria.equipo1 },
              { name: 'Miguel "Navaja"', role: 'Barbero', exp: '10 años', img: images.barberia.equipo2 },
              { name: 'Ana "Color"', role: 'Colorista', exp: '8 años', img: images.peluqueria.equipo2 },
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">🏆 {member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-amber-600 via-amber-700 to-pink-600 text-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-6xl lg:text-7xl font-black mb-12">HORARIOS</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-6 border-b border-black/20">
                  <span className="font-black text-2xl">Lunes - Viernes</span>
                  <span className="font-black text-2xl">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-black/20">
                  <span className="font-black text-2xl">Sábados</span>
                  <span className="font-black text-2xl">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-black/20">
                  <span className="font-black text-2xl">Domingos</span>
                  <span className="font-black text-2xl text-black/40">Con Cita</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-6xl lg:text-7xl font-black mb-12">UBICACIÓN</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-6xl">📍</span>
                  <div>
                    <div className="font-black text-2xl mb-2">Dirección</div>
                    <div className="text-black/70 text-xl">Av. Principal, Centro de Punto Fijo<br/>Estado Falcón, Venezuela</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-6xl">📱</span>
                  <div>
                    <div className="font-black text-2xl mb-2">Contacto</div>
                    <div className="text-black/70 text-xl">+58 412-000-0000<br/>citas@stylestudio.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-gray-950 border-t border-gray-900">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-xl">💈</div>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-xl -ml-4 relative z-10">✂️</div>
            <div className="ml-6">
              <div className="text-lg font-black">STYLE STUDIO</div>
              <div className="text-xs text-gray-500">Barbería & Peluquería</div>
            </div>
          </div>
          
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-amber-500 transition">Instagram</a>
            <a href="#" className="hover:text-pink-500 transition">Facebook</a>
            <a href="#" className="hover:text-green-500 transition">WhatsApp</a>
          </div>
          
          <div className="text-gray-600 text-sm">
            © 2026 Style Studio. Hecho con 💚 por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

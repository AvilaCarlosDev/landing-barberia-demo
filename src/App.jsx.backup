import { useState } from 'react'

function App() {
  const [selectedService, setSelectedService] = useState('corte')

  // Imágenes reales de Unsplash - Barbería
  const images = {
    hero: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80',
    servicios: [
      { name: 'Corte Clásico', price: '$10', time: '30 min', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80' },
      { name: 'Corte + Barba', price: '$16', time: '45 min', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80' },
      { name: 'Perfilado de Barba', price: '$8', time: '20 min', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80' },
      { name: 'Limpieza Facial', price: '$12', time: '25 min', img: 'https://images.unsplash.com/photo-1503951914875-befbb6470521?w=400&q=80' },
      { name: 'Hidratación Capilar', price: '$7', time: '15 min', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=400&q=80' },
      { name: 'Colorimetría', price: 'Consultar', time: '40 min', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80' },
    ],
    barberos: [
      { name: 'Marco', role: 'Master Barber', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80' },
      { name: 'Andrés', role: 'Barber Specialist', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80' },
      { name: 'Gabriel', role: 'Style Expert', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80' },
      { name: 'Leo', role: 'Fade Master', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=400&q=80' },
    ],
    productos: [
      { name: 'Pomada Mate', price: '$15', img: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=400&q=80' },
      { name: 'Aceite para Barba', price: '$18', img: 'https://images.unsplash.com/photo-1620331313174-8d79b8561f99?w=400&q=80' },
      { name: 'Shampoo Premium', price: '$12', img: 'https://images.unsplash.com/photo-1556228720-19875c4b84d8?w=400&q=80' },
      { name: 'After Shave', price: '$20', img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400&q=80' },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-3xl">✂️</div>
              <div>
                <div className="text-2xl font-black tracking-wide">
                  NOBLE <span className="text-amber-500">BARBER</span>
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Studio</div>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium hover:text-amber-500 transition">Inicio</a>
              <a href="#servicios" className="text-sm font-medium hover:text-amber-500 transition">Servicios</a>
              <a href="#barberos" className="text-sm font-medium hover:text-amber-500 transition">Barberos</a>
              <a href="#tienda" className="text-sm font-medium hover:text-amber-500 transition">Tienda</a>
              <a href="#galeria" className="text-sm font-medium hover:text-amber-500 transition">Galería</a>
              <a href="#ubicacion" className="text-sm font-medium hover:text-amber-500 transition">Ubicación</a>
            </nav>

            {/* CTA */}
            <a href="https://wa.me/584120000000" className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black px-6 py-2.5 rounded-full font-bold transition transform hover:scale-105">
              Reservar cita
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Barbería premium" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-6 py-3 rounded-full mb-8">
              <span className="text-amber-500 font-bold">✂️</span>
              <span className="text-amber-500 font-bold text-sm tracking-wider">EXPERIENCIA PREMIUM</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Tu estilo merece<br/>
              <span className="text-amber-500">una experiencia premium</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Cortes, barba y cuidado masculino en un espacio exclusivo. Bebida de cortesía incluida en todos los servicios.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#servicios" className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl">
                Reservar cita
              </a>
              <a href="#servicios" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition border-2 border-white/50">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-20 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Un espacio exclusivo<br/><span className="text-amber-500">para cuidar tu imagen</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                Noble Barber Studio es más que una barbería. Es un lugar elegante, cómodo y moderno donde cada detalle está pensado para tu comodidad.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 text-xl">✓</span>
                  <span>Ambiente premium con música ambiental</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 text-xl">✓</span>
                  <span>Bebida de cortesía (café, cerveza o whisky)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 text-xl">✓</span>
                  <span>Productos de primera calidad</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-500 text-xl">✓</span>
                  <span>Barberos expertos con +10 años de experiencia</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-2xl flex items-center justify-center text-6xl border border-amber-500/30">✂️</div>
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-6xl border border-gray-700">🪒</div>
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-6xl border border-gray-700">💈</div>
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-2xl flex items-center justify-center text-6xl border border-amber-500/30">🥃</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Nuestros Servicios</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-4">Menú de Servicios</h2>
            <p className="text-gray-400 text-lg">Todos incluyen bebida de cortesía</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.servicios.map((servicio, i) => (
              <div key={i} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={servicio.img} alt={servicio.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{servicio.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{servicio.time}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-amber-500">{servicio.price}</span>
                    <a href="https://wa.me/584120000000" className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2.5 rounded-full font-bold transition transform hover:scale-105">
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
      <section id="barberos" className="py-20 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Nuestro Equipo</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-4">Conoce a los Barberos</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.barberos.map((barbero, i) => (
              <div key={i} className="group text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-900">
                  <img src={barbero.img} alt={barbero.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h3 className="text-2xl font-black mb-2">{barbero.name}</h3>
                <p className="text-amber-500 font-bold">{barbero.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tienda */}
      <section id="tienda" className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-4">Productos Premium</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-4">Tienda Noble</h2>
            <p className="text-gray-400 text-lg">Lleva la experiencia a casa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.productos.map((prod, i) => (
              <div key={i} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition">
                <div className="aspect-square overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-3">{prod.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-amber-500">{prod.price}</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full font-bold transition transform hover:scale-105">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación y Horario */}
      <section id="ubicacion" className="py-20 px-6 lg:px-12 bg-gray-950">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Visítanos</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                    <p className="text-gray-400">C.C. Plaza Norte, Nivel Terraza, Local 12<br/>Punto Fijo, Estado Falcón</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🕒</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                    <p className="text-gray-400">Lunes a Sábado: 9:00 AM - 8:00 PM<br/>Domingos y feriados: Cerrado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contacto</h3>
                    <p className="text-gray-400">WhatsApp: +58 412-000-0000<br/>Instagram: @noblebarberstudio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl flex items-center justify-center min-h-[400px] border border-gray-800">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-400">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-amber-600 to-amber-800 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">¿Listo para un nuevo look?</h2>
          <p className="text-xl mb-10">Agenda tu cita por WhatsApp y recibe atención personalizada</p>
          <a href="https://wa.me/584120000000" className="inline-flex items-center gap-3 bg-black text-amber-500 px-10 py-5 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-xl">
            💬 Agenda por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 lg:px-12 border-t border-gray-800">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-3xl">✂️</div>
                <div>
                  <div className="text-2xl font-black tracking-wide">
                    NOBLE <span className="text-amber-500">BARBER</span>
                  </div>
                  <div className="text-xs text-gray-400 tracking-widest uppercase">Studio</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Barbería premium para hombres. Cortes, barba y cuidado masculino en un espacio exclusivo en Punto Fijo.
              </p>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Servicios</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition">Corte Clásico</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Corte + Barba</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Perfilado</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Limpieza Facial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Enlaces</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition">Barberos</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Tienda</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Galería</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 Noble Barber Studio. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/584120000000" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  )
}

export default App

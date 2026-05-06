import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const servicios = [
    { name: 'Corte Clásico', price: '$10', time: '30 min', desc: 'Corte a tijera o máquina con acabado perfecto y lavado incluido.', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80' },
    { name: 'Corte + Barba', price: '$16', time: '45 min', desc: 'El combo premium: corte a medida más perfilado y arreglo de barba.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80' },
    { name: 'Perfilado de Barba', price: '$8', time: '20 min', desc: 'Definimos los líneas de tu barba para un look limpio y profesional.', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80' },
    { name: 'Limpieza Facial', price: '$12', time: '25 min', desc: 'Limpieza profunda con productos premium para piel de hombre.', img: 'https://images.unsplash.com/photo-1503951914875-befbb6470521?w=500&q=80' },
    { name: 'Hidratación Capilar', price: '$7', time: '15 min', desc: 'Tratamiento nutritivo para cabello sano, brillante y fuerte.', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=500&q=80' },
    { name: 'Colorimetría', price: 'Consultar', time: '40 min', desc: 'Técnicas de color a medida: degradado, plata, fantasía y más.', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80' },
  ]

  const barberos = [
    { name: 'Marco', role: 'Master Barber', years: '8 años', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80' },
    { name: 'Andrés', role: 'Fade Specialist', years: '5 años', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80' },
    { name: 'Gabriel', role: 'Style Expert', years: '6 años', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80' },
    { name: 'Leo', role: 'Color Artist', years: '4 años', img: 'https://images.unsplash.com/photo-1593702295094-aea8c5c13589?w=400&q=80' },
  ]

  const reviews = [
    { name: 'Carlos M.', text: 'El mejor corte que me han hecho. El ambiente es increíble y Marco es un artista.', stars: 5 },
    { name: 'José R.', text: 'Vine por primera vez y ya no voy a ir a otro lado. Precio justo, calidad premium.', stars: 5 },
    { name: 'Miguel A.', text: 'La combinación corte + barba vale cada céntimo. Salgo siempre como nuevo.', stars: 5 },
  ]

  return (
    <div className="barber-app">

      <header className={`barber-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="barber-logo">
            <div className="logo-scissors">✂️</div>
            <div>
              <span className="logo-name">NOBLE <span className="logo-accent">BARBER</span></span>
              <span className="logo-tagline">Premium Studio</span>
            </div>
          </a>
          <nav className="barber-nav">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#barberos">Barberos</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>
          <a href="https://wa.me/584120000000" className="btn-reservar">
            💬 Reservar Cita
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="barber-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80" alt="" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content">
            <div className="hero-pill">✂️ BARBERÍA PREMIUM · DESDE 2015</div>
            <h1>Tu estilo merece<br /><span>una experiencia</span><br />diferente</h1>
            <p>Cortes de precisión, arreglo de barba y cuidado masculino en un espacio exclusivo. Bebida de cortesía incluida.</p>
            <div className="hero-btns">
              <a href="https://wa.me/584120000000" className="btn-primary">💬 Reservar cita ahora</a>
              <a href="#servicios" className="btn-ghost">Ver servicios</a>
            </div>
            <div className="hero-badges">
              <div className="badge-item"><strong>500+</strong><span>Clientes felices</span></div>
              <div className="badge-div" />
              <div className="badge-item"><strong>4.9★</strong><span>Google Reviews</span></div>
              <div className="badge-div" />
              <div className="badge-item"><strong>10 años</strong><span>De experiencia</span></div>
            </div>
          </div>
        </section>

        <section id="servicios" className="servicios-section">
          <div className="section-wrap">
            <div className="section-head">
              <span className="section-eyebrow">Menú de Servicios</span>
              <h2>Nuestros Servicios</h2>
              <p>Todos incluyen bebida de cortesía</p>
            </div>
            <div className="servicios-grid">
              {servicios.map((s, i) => (
                <div key={i} className={`servicio-card ${activeService === i ? 'expanded' : ''}`} onClick={() => setActiveService(activeService === i ? null : i)}>
                  <div className="serv-img">
                    <img src={s.img} alt={s.name} loading="lazy" />
                    <div className="serv-overlay" />
                  </div>
                  <div className="serv-body">
                    <div className="serv-top">
                      <h3>{s.name}</h3>
                      <span className="serv-time">{s.time}</span>
                    </div>
                    {activeService === i && <p className="serv-desc">{s.desc}</p>}
                    <div className="serv-footer">
                      <span className="serv-price">{s.price}</span>
                      <a href="https://wa.me/584120000000" className="btn-book" onClick={e => e.stopPropagation()}>Reservar</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="barberos" className="barberos-section">
          <div className="section-wrap">
            <div className="section-head light">
              <span className="section-eyebrow">El Equipo</span>
              <h2>Conoce a los Maestros</h2>
            </div>
            <div className="barberos-grid">
              {barberos.map((b, i) => (
                <div key={i} className="barbero-card">
                  <div className="barbero-img">
                    <img src={b.img} alt={b.name} loading="lazy" />
                    <div className="barbero-overlay">
                      <a href="https://wa.me/584120000000" className="btn-agendar">Agendar con {b.name}</a>
                    </div>
                  </div>
                  <div className="barbero-info">
                    <h3>{b.name}</h3>
                    <span className="barbero-role">{b.role}</span>
                    <span className="barbero-exp">{b.years} de experiencia</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-wrap">
            <div className="section-head">
              <span className="section-eyebrow">Testimonios</span>
              <h2>Lo que dicen nuestros clientes</h2>
            </div>
            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <div className="review-stars">{'\u2605'.repeat(r.stars)}</div>
                  <p>"{r.text}"</p>
                  <strong>{r.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="cta-section">
          <div className="section-wrap cta-inner">
            <div>
              <h2>¿Listo para un cambio de look?</h2>
              <p>Reserva tu cita ahora. Sin esperas, sin complicaciones.</p>
              <div className="cta-details">
                <span>📍 Centro Comercial Noble, Local 8</span>
                <span>🕛 Lun-Sáb: 9am - 8pm</span>
              </div>
            </div>
            <a href="https://wa.me/584120000000" className="btn-cta">💬 Reservar por WhatsApp</a>
          </div>
        </section>

        <footer className="barber-footer">
          <div className="section-wrap footer-inner">
            <div>
              <span className="logo-name" style={{color:'white'}}>✂️ NOBLE <span className="logo-accent">BARBER</span></span>
              <p>Premium Studio desde 2015</p>
            </div>
            <div className="footer-links">
              <h4>Servicios</h4>
              <a href="#">Cortes</a>
              <a href="#">Barba</a>
              <a href="#">Colorimetría</a>
            </div>
            <div className="footer-links">
              <h4>Contacto</h4>
              <a href="#">WhatsApp</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 Noble Barber Studio</div>
        </footer>
      </main>
    </div>
  )
}

export default App

import { useEffect } from "react";
import "../styles/landing.css";

export default function IndexPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));

    return () => {
      document.querySelectorAll(".fade-in").forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <div className="viaia-landing-v2">
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src="/Vector-4.png" alt="Viaia" style={{ height: "24px" }} />
          </a>
          <div className="nav-links">
            <a href="https://app.esviaia.com">Viaia App</a>
            <a href="https://flow.esviaia.com">Viaia Flow</a>
            <a href="https://wa.me/584228846783" className="pill-dark">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="hero-content">
          <div className="hero-badge">El ecosistema Viaia</div>
          <h1 className="hero-title">
            Dos productos<br />
            Un solo <em>propósito</em>
          </h1>
          <p className="hero-sub">
            Viaia conecta a los viajeros con respuestas al instante, y a los operadores con las herramientas para brillar.<br />
            ¿Cuál eres tú?
          </p>
          <div className="cards-grid">
            <a href="https://app.esviaia.com" className="choice-card card-app">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                </svg>
              </div>
              <div className="card-tag">Para viajeros</div>
              <div className="card-name">Viaia App</div>
              <p className="card-desc">
                Tu asistente de viaje inteligente. Pregunta en tu idioma y obtén al instante precios, horarios, disponibilidad y todo lo que necesitas para decidir con confianza.
              </p>
              <div className="card-pills">
                <span className="pill">Disponible 24/7</span>
                <span className="pill">15+ idiomas</span>
                <span className="pill">Perfil profesional</span>
                <span className="pill">Atención inmediata</span>
                <span className="pill">Enfocado a la venta</span>
              </div>
              <span className="card-cta">
                Explorar App <span className="card-arrow">→</span>
              </span>
            </a>
            <a href="https://flow.esviaia.com" className="choice-card card-flow">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9"></rect>
                  <rect x="14" y="3" width="7" height="5"></rect>
                  <rect x="14" y="12" width="7" height="9"></rect>
                  <rect x="3" y="16" width="7" height="5"></rect>
                </svg>
              </div>
              <div className="card-tag">Para operadores</div>
              <div className="card-name">Viaia Flow</div>
              <p className="card-desc">
                Tu panel todo-en-uno. Configura tu perfil una vez y Viaia atiende a tus clientes automáticamente — en tu App, tu WhatsApp y tu Instagram.
              </p>
              <div className="card-pills">
                <span className="pill">Calendario automatizado</span>
                <span className="pill">Integraciones sociales</span>
                <span className="pill">Tienes el control total</span>
                <span className="pill">Gestion de productos</span>
              </div>
              <span className="card-cta">
                Explorar Flow <span className="card-arrow">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* VIAIA APP HIGHLIGHTS */}
      <div className="section-divider fade-in">
        <div className="divider-label">Viaia App · Para viajeros</div>
      </div>
      <div className="app-section fade-in d1">
        <div className="app-section-header">
          <div className="section-tag tag-purple">Para viajeros y exploradores</div>
          <h2 className="section-title">
            Todo empieza con una<br />
            <em>conversación clara</em>
          </h2>
          <p className="section-sub">
            Tus clientes preguntan, Viaia responde al instante. Disponible siempre, incluso cuando tú no estás.
          </p>
        </div>
        <div className="app-highlights">
          <div className="app-highlight-card">
            <span className="app-highlight-emoji">💬</span>
            <div className="app-highlight-title">Todo empieza con una conversación clara</div>
            <p className="app-highlight-desc">
              Tus clientes preguntan, Viaia responde al instante, de forma clara y profesional. Disponible siempre, incluso cuando tú no estás.
            </p>
          </div>
          <div className="app-highlight-card">
            <span className="app-highlight-emoji">⚡️</span>
            <div className="app-highlight-title">Mantén tu servicio siempre al alcance</div>
            <p className="app-highlight-desc">
              Tu servicio listo, claro y profesional, sin perder tiempo ni clientes. Lo que empezó como un primer paso, ahora es tu operación en acción.
            </p>
          </div>
          <div className="app-highlight-card">
            <span className="app-highlight-emoji">✨</span>
            <div className="app-highlight-title">¿Te atreves a vivir una atención única?</div>
            <p className="app-highlight-desc">
              Con Viaia, tus clientes reciben respuestas inmediatas y profesionales, mientras tú disfrutas de tranquilidad y control total.
            </p>
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="section-divider fade-in">
        <div className="divider-label">Viaia Flow · Por qué importa</div>
      </div>
      <div className="compare-section fade-in d1">
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-tag tag-teal" style={{ display: "inline-flex" }}>
            El primer paso para optimizar tu atención
          </div>
          <h2 className="section-title teal" style={{ marginTop: "4px" }}>
            Te ayuda a no <em>perder clientes</em>
          </h2>
          <p className="section-sub">Lo que cambia cuando Viaia trabaja por ti.</p>
        </div>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>¿Qué ganas?</th>
                <th className="col-viaia">Con Viaia</th>
                <th>Sin Viaia</th>
                <th>Resultado real</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⏳ Recupera tu tiempo</td>
                <td className="viaia-col">No tienes que preocuparte por responder</td>
                <td>Debes dedicar tiempo a responder</td>
                <td className="result-col">Dedica tu tiempo a crecer, no a mensajes repetitivos</td>
              </tr>
              <tr>
                <td>🚀 Mejora la conversión</td>
                <td className="viaia-col">+23–70% de conversión enfocada en acciones</td>
                <td>3–12% con atención tradicional</td>
                <td className="result-col">+40–60% más retención con Viaia</td>
              </tr>
              <tr>
                <td>⏱️ Tiempo de respuesta</td>
                <td className="viaia-col">Respuesta inmediata 24/7</td>
                <td>Horas o incluso días</td>
                <td className="result-col">Clientes atendidos al instante</td>
              </tr>
              <tr>
                <td>🤖 Tasa de resolución</td>
                <td className="viaia-col">71–93% de consultas resueltas automáticamente</td>
                <td>Depende de intervención humana</td>
                <td className="result-col">Lleva a otro nivel la experiencia del cliente</td>
              </tr>
              <tr>
                <td>🌐 Atención multilenguaje</td>
                <td className="viaia-col">Disponible en todos los idiomas</td>
                <td>Limitada a pocos idiomas</td>
                <td className="result-col">Preparado para atender a cualquier público</td>
              </tr>
              <tr>
                <td>📄 Densidad de información</td>
                <td className="viaia-col">Clara y directa, orientada a la venta</td>
                <td>Mensajes largos, confusos y densos</td>
                <td className="result-col">Mayor comprensión y retención</td>
              </tr>
              <tr>
                <td>💬 Conversaciones simultáneas</td>
                <td className="viaia-col">Ilimitadas al mismo tiempo</td>
                <td>1–3 a la vez</td>
                <td className="result-col">Atiendes más clientes sin esfuerzo extra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PRICING */}
      <div className="pricing-section fade-in d1">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag tag-teal" style={{ display: "inline-flex" }}>
            Parte de Viaia Flow
          </div>
          <h2 className="section-title teal" style={{ marginTop: "4px" }}>
            Planes adaptados a <em>tu servicio</em>
          </h2>
          <p className="section-sub">
            Viaia organiza la información de tu servicio y responde a tus clientes de forma clara y automática, para que no pierdas oportunidades.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-plan">Plan Freemium</div>
            <div className="pricing-name">Empieza sin riesgos</div>
            <div className="pricing-tagline">
              Vive la experiencia de organizar tu servicio de manera eficiente y descubre cómo Viaia puede optimizar tu atención.
            </div>
            <div className="pricing-price">
              <span className="price-num">$0</span>
              <span className="price-per">/mes</span>
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-features">
              <div className="pricing-feat">Hasta 50 conversaciones para probar la plataforma</div>
              <div className="pricing-feat">Acceso inmediato y sin riesgos</div>
              <div className="pricing-feat">Evalúa el potencial antes de avanzar</div>
            </div>
            <a href="https://flow.esviaia.com" className="pricing-cta">
              Comenzar gratis
            </a>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Más popular</div>
            <div className="pricing-plan">Plan Prepago</div>
            <div className="pricing-name">Flexibilidad total</div>
            <div className="pricing-tagline">
              Para servicios que buscan escalar a su ritmo. Recarga según tus necesidades.
            </div>
            <div className="pricing-price">
              <span className="price-num">$10</span>
              <span className="price-per">/mes</span>
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-features">
              <div className="pricing-feat">75 conversaciones por recarga, ampliable fácilmente</div>
              <div className="pricing-feat">Prueba mientras crece tu operación</div>
              <div className="pricing-feat">Soporte básico con seguimiento personalizado</div>
              <div className="pricing-feat">Control total sobre el uso y expansión</div>
            </div>
            <a href="https://flow.esviaia.com" className="pricing-cta">
              Elegir Prepago
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-plan">Plan Básico</div>
            <div className="pricing-name">Eficiencia y excelencia</div>
            <div className="pricing-tagline">
              Para servicios consolidados. Maximiza la interacción con soporte integral y certificación oficial Viaia.
            </div>
            <div className="pricing-price">
              <span className="price-num">$30</span>
              <span className="price-per">/mes</span>
            </div>
            <div className="pricing-divider"></div>
            <div className="pricing-features">
              <div className="pricing-feat">Hasta 300 conversaciones mensuales</div>
              <div className="pricing-feat">Soporte completo 24/7 sin interrupciones</div>
              <div className="pricing-feat">Panel avanzado de métricas y gestión</div>
              <div className="pricing-feat">Certificación oficial Viaia</div>
            </div>
            <a href="https://flow.esviaia.com" className="pricing-cta">
              Elegir Básico
            </a>
          </div>
        </div>
        <p className="pricing-footer">
          ¿Necesitas algo personalizado? <a href="https://wa.me/584228846783">Conversemos sobre tu servicio →</a>
        </p>
      </div>

      {/* HOW IT CONNECTS */}
      <div className="section-divider fade-in">
        <div className="divider-label">Cómo se conectan</div>
      </div>
      <div className="connect-section fade-in d1">
        <div className="connect-header">
          <h2 className="connect-title">
            Se diseñaron para <em>trabajar juntos</em>
          </h2>
          <p className="connect-sub">Configuras una vez en Flow. Tus clientes lo viven en todos tus canales.</p>
        </div>
        <div className="connect-grid">
          <div className="connect-block connect-block-app">
            <div className="connect-block-name">Viaia App · Viajeros</div>
            <ul className="connect-list">
              <li>Pregunta en lenguaje natural sobre cualquier destino</li>
              <li>Precios, horarios y disponibilidad al instante</li>
              <li>Reserva directamente con el operador</li>
              <li>Respuestas en su idioma, a cualquier hora</li>
            </ul>
          </div>
          <div className="connect-middle">
            <div className="connect-line"></div>
            <div className="connect-badge">sincronizados</div>
            <div className="connect-line"></div>
          </div>
          <div className="connect-block connect-block-flow">
            <div className="connect-block-name">Viaia Flow · Operadores</div>
            <ul className="connect-list">
              <li>Perfil, productos, reglas y comodidades en un solo lugar</li>
              <li>Viaia App atiende a tus clientes con esa info</li>
              <li>Gestiona reservas, calendario y mensajes desde un panel</li>
              <li>Notificaciones por WhatsApp cuando llega una solicitud</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CHANNELS */}
      <div className="section-divider fade-in">
        <div className="divider-label">Viaia Flow · Canales</div>
      </div>
      <div className="channels-section fade-in d1">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag tag-teal" style={{ display: "inline-flex" }}>
            Parte de Viaia Flow
          </div>
          <h2 className="section-title teal" style={{ marginTop: "4px" }}>
            Viaia responde donde<br />
            <em>tus clientes escriben</em>
          </h2>
          <p className="section-sub">
            Conecta tus canales favoritos y deja que Viaia atienda automáticamente — sin que tengas que estar pendiente.
          </p>
        </div>
        <div className="channels-grid">
          <div className="channel-card channel-wa">
            <div className="channel-header">
              <div className="channel-logo">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.852L0 24l6.272-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.992-1.364l-.358-.213-3.724.895.944-3.628-.234-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
              </div>
              <div>
                <div className="channel-name">WhatsApp Business</div>
                <div className="channel-handle">Respuestas automáticas 24/7</div>
              </div>
            </div>
            <p className="channel-desc">
              Conecta tu número y Viaia atiende cada mensaje automáticamente — precios, disponibilidad, reglas y más — como si fueras tú.
            </p>
            <div className="channel-feats">
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Responde preguntas frecuentes sin que intervengas</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Guía al cliente hasta solicitar una reserva</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Detecta el idioma y responde en el mismo</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Seguimiento completo desde tu panel de chats</span>
              </div>
            </div>
            <span className="channel-badge">Disponible</span>
          </div>
          <div className="channel-card channel-ig">
            <div className="channel-header">
              <div className="channel-logo">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ig)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
              <div>
                <div className="channel-name">Instagram DM</div>
                <div className="channel-handle">Mensajes directos automatizados</div>
              </div>
            </div>
            <p className="channel-desc">
              Conecta tu cuenta y Viaia gestiona los DMs de tus seguidores — respondiendo consultas, informando disponibilidad y convirtiendo interés en reservas.
            </p>
            <div className="channel-feats">
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Atiende DMs mientras publicas contenido</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Nadie se queda sin respuesta</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Mantiene el tono de tu marca en cada mensaje</span>
              </div>
              <div className="channel-feat">
                <div className="channel-feat-dot"></div>
                <span>Seguimiento completo desde tu panel de chats</span>
              </div>
            </div>
            <span className="channel-badge">Disponible</span>
          </div>
        </div>
        <div className="channels-note">
          Todo lo que configures en <strong>Viaia Flow</strong> — descripción, precios, reglas, productos — es lo que Viaia usa para responder en <strong>WhatsApp</strong> e <strong>Instagram</strong>. Configuras una vez, funciona en todos tus canales.
        </div>
      </div>

      {/* FOOTER */}
      <footer className="fade-in d2">
        <div className="footer-logo">
          <img src="/Vector-2.png" alt="Viaia" style={{ height: "24px" }} />
        </div>
        <div className="footer-links">
          <a href="https://app.esviaia.com">Viaia App</a>
          <a href="https://flow.esviaia.com">Viaia Flow</a>
          <a href="mailto:info@esviaia.com">Contacto</a>
          <a href="https://www.instagram.com/esviaia/">Instagram</a>
          <a href="https://wa.me/584228846783">WhatsApp</a>
        </div>
        <span className="footer-copy">© 2025 Viaia LLC.</span>
      </footer>
    </div>
  );
}

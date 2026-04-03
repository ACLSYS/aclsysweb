'use client'

import Link from 'next/link'

/* ── MARQUEE DATA ── */
const techPartners = [
  { name: 'Ubiquiti', icon: 'fas fa-wifi' },
  { name: 'MikroTik', icon: 'fas fa-router' },
  { name: 'Vercel', icon: 'fas fa-triangle' },
  { name: 'Next.js', icon: 'fas fa-code' },
  { name: 'VMware', icon: 'fas fa-server' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Proxmox', icon: 'fas fa-cube' },
  { name: 'Fortinet', icon: 'fas fa-shield-halved' },
  { name: 'Cisco', icon: 'fas fa-network-wired' },
  { name: 'Linux', icon: 'fab fa-linux' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Cloudflare', icon: 'fas fa-cloud' },
]

const sectors = [
  { name: 'Hoteles', icon: 'fas fa-hotel' },
  { name: 'Restaurantes', icon: 'fas fa-utensils' },
  { name: 'Lavanderías', icon: 'fas fa-shirt' },
  { name: 'Clínicas', icon: 'fas fa-hospital' },
  { name: 'Constructoras', icon: 'fas fa-hard-hat' },
  { name: 'Agencias', icon: 'fas fa-briefcase' },
  { name: 'Retail', icon: 'fas fa-store' },
  { name: 'Educación', icon: 'fas fa-graduation-cap' },
  { name: 'Gobierno', icon: 'fas fa-landmark' },
  { name: 'Logística', icon: 'fas fa-truck' },
  { name: 'Inmobiliarias', icon: 'fas fa-building' },
  { name: 'Turismo', icon: 'fas fa-umbrella-beach' },
]

const services = [
  { tag: 'Infraestructura IT', tagClass: 'tag-infra', icon: 'fas fa-shield-halved', iconBg: 'rgba(41,181,232,.1)', iconColor: 'var(--blue)', title: 'Ciberseguridad', desc: 'Protección integral contra ransomware, phishing y amenazas avanzadas. Arquitecturas Zero Trust y gestión de incidentes.' },
  { tag: 'Infraestructura IT', tagClass: 'tag-infra', icon: 'fas fa-cloud', iconBg: 'rgba(41,181,232,.1)', iconColor: 'var(--blue)', title: 'Cloud Solutions', desc: 'Migración, gestión y optimización de nubes públicas, privadas e híbridas con máxima seguridad y eficiencia.' },
  { tag: 'Infraestructura IT', tagClass: 'tag-infra', icon: 'fas fa-network-wired', iconBg: 'rgba(41,181,232,.1)', iconColor: 'var(--blue)', title: 'Redes y Comunicaciones', desc: 'Diseño e implementación de redes corporativas modernas: LAN, Wi-Fi 6, SD-WAN y conectividad segura multi-sede.' },
  { tag: 'Desarrollo', tagClass: 'tag-dev', icon: 'fas fa-code', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5', title: 'Desarrollo Web', desc: 'Sitios web y plataformas digitales de alto rendimiento con Next.js, React y tecnologías modernas. Diseño profesional y SEO.' },
  { tag: 'Desarrollo', tagClass: 'tag-dev', icon: 'fas fa-mobile-screen', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5', title: 'Aplicaciones Móviles', desc: 'Apps iOS y Android nativas o cross-platform con React Native. Desde el diseño UX hasta el despliegue en tiendas.' },
  { tag: 'Desarrollo', tagClass: 'tag-dev', icon: 'fas fa-laptop-code', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5', title: 'Software a Medida', desc: 'Sistemas internos, ERPs, CRMs y plataformas personalizadas que automatizan y optimizan los procesos de tu empresa.' },
]

const whyCards = [
  { icon: 'fas fa-map-location-dot', title: 'Presencia Regional', desc: 'Equipo local en la Riviera Maya con conocimiento profundo del mercado y cobertura en toda la Península de Yucatán.' },
  { icon: 'fas fa-user-tie', title: 'Atención Personalizada', desc: 'Nos involucramos directamente con cada cliente. Cada proyecto se diseña desde cero, sin soluciones genéricas.' },
  { icon: 'fas fa-bolt', title: 'Implementación Ágil', desc: 'Procesos optimizados para implementar rápido con mínimo impacto en tu operación diaria.' },
  { icon: 'fas fa-layer-group', title: 'Servicio Integral', desc: 'IT e infraestructura + desarrollo de software en un solo proveedor. Sin contratar múltiples empresas.' },
]

const locations = [
  { icon: 'fas fa-location-dot', title: 'Sede principal', desc: 'Riviera Maya, Quintana Roo' },
  { icon: 'fas fa-expand-arrows-alt', title: 'Cobertura regional', desc: 'Cancún, Playa del Carmen, Mérida, Campeche y toda la Península' },
  { icon: 'fas fa-clock', title: 'Disponibilidad', desc: 'Soporte 24/7 para clientes con contrato de mantenimiento' },
  { icon: 'fas fa-envelope', title: 'info@aclsys.net', desc: 'Respuesta en menos de 24 horas' },
]

export default function Home() {
  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '152px 6% 100px', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        {/* BG gradients */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(41,181,232,.07) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 5% 90%, rgba(41,181,232,.05) 0%, transparent 60%)',
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', right: 0, top: 80, width: 420, height: 420,
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 70% 40%, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 780 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.6rem',
            background: 'rgba(41,181,232,.08)', border: '1px solid rgba(41,181,232,.2)',
            borderRadius: 100, padding: '.4rem 1rem',
            fontSize: '.78rem', fontWeight: 700, color: 'var(--blue-dk)',
            letterSpacing: '.5px', marginBottom: '2rem',
          }}>
            <span className="hero-badge-dot" />
            Riviera Maya · Quintana Roo, México
          </div>

          <h1 className="heading-xl hero-title" style={{ marginBottom: '1.5rem' }}>
            Tecnología que impulsa<br />
            <span style={{ color: 'var(--blue)' }}>tu empresa</span> al siguiente nivel
          </h1>

          <p className="lead" style={{ maxWidth: 580, marginBottom: '2.5rem' }}>
            Consultoría IT, infraestructura tecnológica y desarrollo de software para empresas de la Riviera Maya y la Península de Yucatán. Soluciones a medida, atención local, resultados reales.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/servicios" className="btn btn-primary btn-lg">Ver servicios</Link>
            <button onClick={openWA} className="btn btn-outline btn-lg">Hablar con un experto</button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '3rem',
            borderTop: '1px solid var(--border)', flexWrap: 'wrap',
          }}>
            {[
              { n: '6', s: '+', l: 'Áreas de servicio' },
              { n: '2', s: ' cat', l: 'Infraestructura & Software' },
              { n: '100', s: '%', l: 'Enfoque regional' },
              { n: '24', s: '/7', l: 'Soporte continuo' },
            ].map((st) => (
              <div key={st.l}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1px' }}>
                  {st.n}<span style={{ color: 'var(--blue)' }}>{st.s}</span>
                </div>
                <div style={{ fontSize: '.82rem', color: 'var(--muted)', fontWeight: 500, marginTop: '.1rem' }}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE 1 — TECH PARTNERS ── */}
      <div className="marquee-band" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '.4rem' }}>
          <span style={{ paddingLeft: '6%', fontSize: '.7rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Tecnologías & Partners
          </span>
        </div>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {[...techPartners, ...techPartners].map((p, i) => (
              <div key={i} className="marquee-item">
                <i className={p.icon} style={{ color: 'var(--blue)', fontSize: '1rem' }} />
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-visual">
            <i className="fas fa-server" style={{ fontSize: '3.5rem', color: 'var(--blue)' }} />
            <p style={{ fontSize: '.9rem', color: 'var(--muted)', textAlign: 'center', padding: '0 2rem' }}>
              Infraestructura IT y desarrollo de software para la Riviera Maya
            </p>
          </div>
          <div>
            <span className="eyebrow">Sobre ACLSYS</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1.2rem' }}>
              Expertos en tecnología<br />con visión regional
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Somos una empresa especializada en consultoría IT, infraestructura tecnológica y desarrollo de software para el mercado empresarial de la Riviera Maya y la Península de Yucatán.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: 'fas fa-map-location-dot', title: 'Presencia local garantizada', desc: 'Equipo en la Riviera Maya, con cobertura en toda la Península de Yucatán.' },
                { icon: 'fas fa-puzzle-piece', title: 'Soluciones 100% a medida', desc: 'Diseñamos cada proyecto según las necesidades reales de tu empresa.' },
                { icon: 'fas fa-headset', title: 'Soporte continuo post-implementación', desc: 'No desaparecemos al terminar. Te acompañamos en el largo plazo.' },
              ].map((f) => (
                <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '.85rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: 'rgba(41,181,232,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={f.icon} style={{ color: 'var(--blue)', fontSize: '.9rem' }} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '.92rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '.15rem' }}>{f.title}</strong>
                    <span style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Lo que hacemos</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Infraestructura IT & Desarrollo</h2>
            <p className="lead" style={{ maxWidth: 540, margin: '0 auto' }}>Cubrimos todas las necesidades tecnológicas de tu empresa en un solo lugar.</p>
          </div>
          <div className="srv-grid">
            {services.map((s) => (
              <div key={s.title} className="srv-card">
                <span className={`tag ${s.tagClass}`}>{s.tag}</span>
                <div className="srv-icon" style={{ background: s.iconBg }}>
                  <i className={s.icon} style={{ color: s.iconColor, fontSize: '1.25rem' }} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/servicios" className="more">
                  Ver más <i className="fas fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/servicios" className="btn btn-outline btn-lg">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      {/* ── WHY ACLSYS ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">¿Por qué ACLSYS?</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Diferenciadores clave</h2>
            <p className="lead" style={{ maxWidth: 520, margin: '0 auto' }}>Lo que nos distingue en el mercado de la Riviera Maya y la Península.</p>
          </div>
          <div className="why-grid">
            {whyCards.map((w) => (
              <div key={w.title} className="why-card">
                <div style={{ fontSize: '1.8rem', color: 'var(--blue)', marginBottom: '.9rem' }}>
                  <i className={w.icon} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE 2 — SECTORES ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ paddingLeft: '6%', marginBottom: '.4rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Sectores que atendemos
          </span>
        </div>
        <div className="marquee-track-wrap">
          <div className="marquee-track marquee-reverse">
            {[...sectors, ...sectors].map((s, i) => (
              <div key={i} className="marquee-item marquee-item-sector">
                <i className={s.icon} style={{ color: 'var(--blue)', fontSize: '1rem' }} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COVERAGE ── */}
      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container cov-grid">
          <div className="cov-map">
            <i className="fas fa-map-marked-alt" style={{ fontSize: '3.5rem', color: 'var(--blue)' }} />
            <p style={{ fontSize: '.9rem', color: 'var(--muted)', textAlign: 'center', padding: '0 2rem', lineHeight: 1.6 }}>
              Riviera Maya · Cancún · Playa del Carmen<br />Mérida · Campeche · Toda la Península
            </p>
          </div>
          <div>
            <span className="eyebrow">Cobertura</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>
              Riviera Maya y toda<br />la Península de Yucatán
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Con sede en la Riviera Maya, atendemos empresas, organizaciones y gobiernos de toda la Península. Nuestra visión es ser el aliado tecnológico estratégico de la región.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {locations.map((loc) => (
                <div key={loc.title} className="loc-item">
                  <i className={loc.icon} style={{ color: 'var(--blue)', fontSize: '1rem', flexShrink: 0, width: 18, textAlign: 'center' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '.9rem', color: 'var(--ink)' }}>{loc.title}</strong>
                    <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>{loc.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1e293b 100%)', padding: '80px 6%', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>¿Listo?</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', margin: '.5rem 0 1rem' }}>Moderniza tu infraestructura hoy</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.65)', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Hablemos. Estamos en la Riviera Maya y trabajamos en toda la Península.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar consulta gratuita</Link>
            <button onClick={openWA} className="btn btn-lg" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.2)' }}>
              <i className="fab fa-whatsapp" /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* TOKENS */
        :root {
          --white: #ffffff;
          --bg: #f8f9fb;
          --blue: #29B5E8;
          --blue-d: #1a9fd4;
          --blue-dk: #0f6ea3;
          --ink: #0d1117;
          --ink2: #1e293b;
          --muted: #64748b;
          --border: #e2e8f0;
          --border2: #cbd5e1;
          --surface: #f1f5f9;
          --radius: 10px;
          --shadow: 0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06);
          --shadow-h: 0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1);
          --navy: #0d1117;
        }

        /* BASE */
        .container { max-width: 1200px; margin: 0 auto; }
        .section { padding: 96px 6%; }

        /* EYEBROW */
        .eyebrow {
          display: inline-flex; align-items: center; gap: .5rem;
          font-size: .75rem; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--blue); margin-bottom: 1rem;
        }
        .eyebrow::before { content:''; width: 20px; height: 2px; background: var(--blue); border-radius: 2px; }

        /* HEADINGS */
        .heading-xl { font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 800; color: var(--ink); line-height: 1.1; letter-spacing: -1.5px; }
        .heading-lg { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -1px; }
        .lead { font-size: 1.1rem; color: var(--muted); line-height: 1.75; font-weight: 400; }

        /* BUTTONS */
        .btn { display: inline-flex; align-items: center; gap: .4rem; border: none; border-radius: var(--radius); font-weight: 600; font-size: .875rem; transition: all .2s; cursor: pointer; font-family: inherit; }
        .btn-primary { background: var(--blue); color: #fff; padding: .55rem 1.2rem; box-shadow: 0 2px 8px rgba(41,181,232,.3); text-decoration: none; }
        .btn-primary:hover { background: var(--blue-d); box-shadow: 0 4px 16px rgba(41,181,232,.4); transform: translateY(-1px); }
        .btn-outline { background: transparent; color: var(--blue); padding: .55rem 1.2rem; border: 1.5px solid var(--blue); text-decoration: none; }
        .btn-outline:hover { background: var(--blue); color: #fff; }
        .btn-lg { padding: .8rem 1.8rem; font-size: 1rem; border-radius: 10px; }

        /* HERO BADGE DOT */
        .hero-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--blue); animation: pulse 2s infinite; display: inline-block; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }

        /* MARQUEE */
        .marquee-track-wrap {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-track {
          display: flex; align-items: center; gap: 0;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-reverse { animation: marquee-scroll-reverse 35s linear infinite; }
        @keyframes marquee-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-scroll-reverse { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        .marquee-item {
          display: inline-flex; align-items: center; gap: .6rem;
          padding: .55rem 1.4rem;
          font-size: .875rem; font-weight: 600; color: var(--ink2);
          border-right: 1px solid var(--border);
          white-space: nowrap;
          transition: color .2s;
        }
        .marquee-item:hover { color: var(--blue); }
        .marquee-item-sector {
          background: var(--surface);
          border-radius: 100px;
          border: 1px solid var(--border);
          margin: 0 .4rem;
          padding: .45rem 1.1rem;
        }

        /* ABOUT GRID */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-visual {
          background: linear-gradient(135deg, #e8f7fd 0%, #f0f9ff 100%);
          border-radius: 20px; border: 1px solid rgba(41,181,232,.15);
          aspect-ratio: 4/3; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1.2rem;
          position: relative; overflow: hidden;
        }
        .about-visual::before {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(41,181,232,.08);
        }

        /* SERVICE CARDS */
        .srv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
        .srv-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.8rem; cursor: pointer;
          transition: box-shadow .25s, transform .25s, border-color .25s;
          position: relative; overflow: hidden;
        }
        .srv-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, var(--blue), #5dd5f8);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .srv-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); border-color: rgba(41,181,232,.3); }
        .srv-card:hover::after { transform: scaleX(1); }
        .srv-icon { width: 48px; height: 48px; border-radius: 11px; margin-bottom: 1.2rem; display: flex; align-items: center; justify-content: center; }
        .srv-card h3 { font-size: 1rem; font-weight: 700; color: var(--ink); margin-bottom: .5rem; }
        .srv-card p { font-size: .855rem; color: var(--muted); line-height: 1.65; }
        .more { display: inline-flex; align-items: center; gap: .4rem; margin-top: 1.1rem; font-size: .8rem; font-weight: 700; color: var(--blue); transition: gap .2s; text-decoration: none; }
        .srv-card:hover .more { gap: .7rem; }
        .tag { display: inline-block; font-size: .68rem; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; padding: .25rem .7rem; border-radius: 100px; margin-bottom: .7rem; }
        .tag-infra { background: rgba(41,181,232,.1); color: var(--blue-dk); }
        .tag-dev { background: rgba(99,102,241,.1); color: #4f46e5; }

        /* WHY CARDS */
        .why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 3rem; }
        .why-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 2rem 1.5rem; text-align: center; transition: box-shadow .25s, transform .25s; }
        .why-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); }
        .why-card h3 { font-size: .95rem; font-weight: 700; color: var(--ink); margin-bottom: .5rem; }
        .why-card p { font-size: .845rem; color: var(--muted); line-height: 1.6; }

        /* COVERAGE */
        .cov-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .cov-map {
          background: linear-gradient(135deg, #e8f7fd, #f0f9ff);
          border: 1px solid rgba(41,181,232,.2); border-radius: 20px;
          aspect-ratio: 4/3; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1rem;
        }
        .loc-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; background: var(--white); border: 1px solid var(--border); border-radius: 10px; transition: border-color .2s, box-shadow .2s; }
        .loc-item:hover { border-color: rgba(41,181,232,.35); box-shadow: 0 2px 12px rgba(41,181,232,.1); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .srv-grid { grid-template-columns: repeat(2,1fr); }
          .why-grid { grid-template-columns: repeat(2,1fr); }
          .cov-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 640px) {
          .srv-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
'use client'

import Link from 'next/link'

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const techPartners = [
  { name: 'Ubiquiti',   icon: 'fas fa-wifi' },
  { name: 'MikroTik',   icon: 'fas fa-router' },
  { name: 'TP-Link',    icon: 'fas fa-network-wired' },
  { name: 'Reolink',    icon: 'fas fa-camera' },
  { name: 'Fortinet',   icon: 'fas fa-shield-halved' },
  { name: 'Cisco',      icon: 'fas fa-server' },
  { name: 'Proxmox',    icon: 'fas fa-cube' },
  { name: 'VMware',     icon: 'fas fa-layer-group' },
  { name: 'Docker',     icon: 'fab fa-docker' },
  { name: 'Linux',      icon: 'fab fa-linux' },
  { name: 'Next.js',    icon: 'fas fa-code' },
  { name: 'Vercel',     icon: 'fas fa-triangle' },
  { name: 'AWS',        icon: 'fab fa-aws' },
  { name: 'Cloudflare', icon: 'fas fa-cloud' },
]

const sectors = [
  { name: 'Hoteles',       icon: 'fas fa-hotel' },
  { name: 'Restaurantes',  icon: 'fas fa-utensils' },
  { name: 'Gimnasios',     icon: 'fas fa-dumbbell' },
  { name: 'Clínicas',      icon: 'fas fa-hospital' },
  { name: 'Constructoras', icon: 'fas fa-hard-hat' },
  { name: 'Retail',        icon: 'fas fa-store' },
  { name: 'Educación',     icon: 'fas fa-graduation-cap' },
  { name: 'Turismo',       icon: 'fas fa-umbrella-beach' },
  { name: 'Logística',     icon: 'fas fa-truck' },
  { name: 'Inmobiliarias', icon: 'fas fa-building' },
  { name: 'Gobierno',      icon: 'fas fa-landmark' },
  { name: 'Agencias',      icon: 'fas fa-briefcase' },
]

const services = [
  {
    tag: 'Infraestructura IT', tagClass: 'tag-infra',
    icon: 'fas fa-network-wired', iconBg: 'rgba(21,151,211,.1)', iconColor: 'var(--blue)',
    title: 'Redes, Cámaras y Conectividad',
    desc: 'Instalación de cámaras CCTV, redes LAN/Wi-Fi, enlaces Ubiquiti punto a punto hasta 4km, organización de rack y ciberseguridad.',
  },
  {
    tag: 'Infraestructura IT', tagClass: 'tag-infra',
    icon: 'fas fa-cloud', iconBg: 'rgba(21,151,211,.1)', iconColor: 'var(--blue)',
    title: 'Cloud & Servidores',
    desc: 'Migración a la nube, infraestructura de servidores, backup y recuperación de datos, virtualización y monitoreo continuo.',
  },
  {
    tag: 'Soporte & Hardware', tagClass: 'tag-support',
    icon: 'fas fa-laptop', iconBg: 'rgba(234,179,8,.1)', iconColor: '#b45309',
    title: 'Soporte Técnico & Hardware',
    desc: 'Mantenimiento de laptops, reparación de impresoras, ensamblado de PC gamer y workstation, soporte presencial y remoto.',
  },
  {
    tag: 'Desarrollo', tagClass: 'tag-dev',
    icon: 'fas fa-code', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5',
    title: 'Desarrollo Web & Apps',
    desc: 'Sitios web corporativos, aplicaciones móviles iOS y Android, plataformas a medida con tecnologías modernas.',
  },
  {
    tag: 'Desarrollo', tagClass: 'tag-dev',
    icon: 'fas fa-laptop-code', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5',
    title: 'Software a Medida',
    desc: 'Sistemas internos, CRMs, ERPs y automatizaciones que optimizan los procesos de tu empresa. Integraciones con IA y n8n.',
  },
  {
    tag: 'Desarrollo', tagClass: 'tag-dev',
    icon: 'fas fa-comments', iconBg: 'rgba(99,102,241,.1)', iconColor: '#4f46e5',
    title: 'Consultoría IT',
    desc: 'Diagnóstico de infraestructura, planificación tecnológica estratégica y acompañamiento en decisiones IT.',
  },
]

const whyCards = [
  { icon: 'fas fa-layer-group',       title: 'Servicio Integral',       desc: 'Infraestructura, soporte, desarrollo y productos SaaS propios. Sin contratar múltiples proveedores.' },
  { icon: 'fas fa-map-location-dot',  title: 'Presencia Regional',      desc: 'Equipo local en la Riviera Maya. Conocemos el mercado y cubrimos toda la Península de Yucatán.' },
  { icon: 'fas fa-screwdriver-wrench',title: 'Manos en el Campo',       desc: 'No solo consultamos — instalamos, cableamos, ensamblamos y configuramos. Trabajo real, resultados concretos.' },
  { icon: 'fas fa-robot',             title: 'Tecnología Propia con IA', desc: 'Accesfy y Reservfy son productos nuestros integrados con inteligencia artificial. No revendemos — creamos.' },
]

const locations = [
  { icon: 'fas fa-location-dot',      title: 'Sede principal',     desc: 'Riviera Maya, Quintana Roo' },
  { icon: 'fas fa-expand-arrows-alt', title: 'Cobertura regional', desc: 'Cancún, Playa del Carmen, Mérida, Campeche y toda la Península' },
  { icon: 'fas fa-clock',             title: 'Disponibilidad',     desc: 'Soporte 24/7 para clientes con contrato de mantenimiento' },
  { icon: 'fas fa-envelope',          title: 'info@aclsys.net',    desc: 'Respuesta en menos de 24 horas' },
]

/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function Home() {
  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '152px 6% 100px', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(21,151,211,.07) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 5% 90%, rgba(21,151,211,.05) 0%, transparent 60%)',
        }} />
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
            background: 'rgba(21,151,211,.08)', border: '1px solid rgba(21,151,211,.2)',
            borderRadius: 100, padding: '.4rem 1rem',
            fontSize: '.78rem', fontWeight: 700, color: 'var(--blue-dk)',
            letterSpacing: '.5px', marginBottom: '2rem',
          }}>
            <span className="hero-badge-dot" />
            Riviera Maya · Quintana Roo, México
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
            Una sola empresa para<br />
            <span style={{ color: 'var(--blue)' }}>toda tu tecnología</span>
          </h1>

          <p className="lead" style={{ maxWidth: 580, marginBottom: '2.5rem' }}>
            Infraestructura IT, soporte técnico, desarrollo de software y productos propios.
            Todo lo que tu empresa necesita en tecnología — sin contratar a 5 proveedores distintos.
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
              { n: '3',  s: '+',   l: 'Áreas de servicio' },
              { n: '2',  s: '',    l: 'Productos SaaS propios' },
              { n: '4',  s: 'km',  l: 'Enlace inalámbrico máximo' },
              { n: '24', s: '/7',  l: 'Soporte con contrato' },
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
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ paddingLeft: '6%', marginBottom: '.6rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Tecnologías &amp; Partners
          </span>
        </div>
        <div className="marquee-wrap">
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
            <i className="fas fa-network-wired" style={{ fontSize: '3.5rem', color: 'var(--blue)', position: 'relative', zIndex: 1 }} />
            <p style={{ fontSize: '.9rem', color: 'var(--muted)', textAlign: 'center', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
              Infraestructura en campo, software propio y soporte técnico — todo desde la Riviera Maya
            </p>
          </div>
          <div>
            <span className="eyebrow">Sobre ACLSYS</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1.2rem' }}>
              Tu aliado tecnológico<br />en la Península de Yucatán
            </h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Somos una empresa de tecnología con manos en el campo y en el código. Instalamos tu red,
              organizamos tu rack, desarrollamos tu software y tenemos productos propios funcionando.
              Todo en un solo proveedor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: 'fas fa-screwdriver-wrench', title: 'Trabajo real en campo',       desc: 'Cámaras, redes, racks, antenas Ubiquiti, mantenimiento de equipos. Manos en la infraestructura.' },
                { icon: 'fas fa-box-open',           title: 'Productos propios SaaS',      desc: 'Accesfy y Reservfy — software desarrollado por ACLSYS, no revendido. Tecnología nuestra, soporte nuestro.' },
                { icon: 'fas fa-map-location-dot',   title: 'Equipo local, cobertura regional', desc: 'Sede en la Riviera Maya. Atendemos toda la Península de Yucatán — Quintana Roo, Yucatán y Campeche.' },
              ].map((f) => (
                <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '.85rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: 'rgba(21,151,211,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Tres áreas. Todo cubierto.</h2>
            <p className="lead" style={{ maxWidth: 540, margin: '0 auto' }}>
              Infraestructura en campo, soporte técnico y desarrollo de software — un solo proveedor para todas tus necesidades tecnológicas.
            </p>
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

      {/* ── PRODUCTOS PROPIOS ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Productos propios</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Software desarrollado por ACLSYS</h2>
            <p className="lead" style={{ maxWidth: 540, margin: '0 auto' }}>
              No revendemos software de terceros. Construimos nuestras propias soluciones — con soporte directo y evolución continua.
            </p>
          </div>

          <div className="productos-grid">

            {/* ACCESFY */}
            <div className="producto-card">
              <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--blue))', padding: '2.5rem 2.5rem 2rem', position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
                <div style={{ position: 'absolute', bottom: -20, left: 40, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,.04)' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', position: 'relative' }}>
                  <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-fingerprint" style={{ fontSize: '1.4rem', color: '#fff' }} />
                  </div>
                  <span style={{ background: 'rgba(34,197,94,.2)', color: '#4ade80', border: '1px solid rgba(34,197,94,.3)', borderRadius: 100, fontSize: '.72rem', fontWeight: 700, padding: '.3rem .9rem', letterSpacing: '.5px' }}>
                    ● LIVE
                  </span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '.4rem', position: 'relative' }}>Accesfy</h3>
                <p style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.7)', position: 'relative' }}>accesfy.app</p>
              </div>
              <div style={{ padding: '2rem 2.5rem 2.5rem', background: 'var(--white)', borderRadius: '0 0 20px 20px', border: '1px solid var(--border)', borderTop: 'none' }}>
                <p style={{ fontSize: '.9rem', color: 'var(--ink2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Sistema de gestión y control de acceso para gimnasios. Los socios entran con <strong>huella dactilar o PIN</strong> — sin tarjetas, sin filas, sin complicaciones.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.8rem' }}>
                  {[
                    'Control de acceso por huella dactilar y PIN',
                    'Gestión de membresías y socios',
                    'Panel de administración web',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', fontSize: '.845rem', color: 'var(--ink2)' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--blue)', fontSize: '.9rem', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', fontSize: '.845rem', color: 'var(--muted)' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--muted)', fontSize: '.9rem', flexShrink: 0 }} />
                    Chatbot de cobro por WhatsApp — próximamente
                  </div>
                </div>
                <a href="https://accesfy.app" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10, padding: '.75rem' }}>
                  Ver Accesfy <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '.75rem' }} />
                </a>
              </div>
            </div>

            {/* RESERVFY */}
            <div className="producto-card">
              <div style={{ background: 'linear-gradient(135deg, var(--blue), #5dd5f8)', padding: '2.5rem 2.5rem 2rem', position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }} />
                <div style={{ position: 'absolute', bottom: -20, left: 40, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', position: 'relative' }}>
                  <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-calendar-check" style={{ fontSize: '1.4rem', color: '#fff' }} />
                  </div>
                  <span style={{ background: 'rgba(251,191,36,.2)', color: '#fbbf24', border: '1px solid rgba(251,191,36,.3)', borderRadius: 100, fontSize: '.72rem', fontWeight: 700, padding: '.3rem .9rem', letterSpacing: '.5px' }}>
                    ⚡ EN DESARROLLO
                  </span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '.4rem', position: 'relative' }}>Reservfy</h3>
                <p style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.8)', position: 'relative' }}>Motor de reservas inteligente</p>
              </div>
              <div style={{ padding: '2rem 2.5rem 2.5rem', background: 'var(--white)', borderRadius: '0 0 20px 20px', border: '1px solid var(--border)', borderTop: 'none' }}>
                <p style={{ fontSize: '.9rem', color: 'var(--ink2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Tu cliente escribe por <strong>WhatsApp</strong> — el chatbot IA interpreta el mensaje, extrae los datos y crea la reserva automáticamente. Sin intervención humana.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.8rem' }}>
                  {[
                    'Chatbot IA para WhatsApp y web',
                    'Automatización con n8n',
                    'Panel de reservas en tiempo real',
                    'Stack: Laravel + Docker + IA',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', fontSize: '.845rem', color: 'var(--ink2)' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--blue)', fontSize: '.9rem', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <button onClick={openWA} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 10, padding: '.75rem' }}>
                  Quiero saber más <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY ACLSYS ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow">¿Por qué ACLSYS?</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Una empresa. Todo resuelto.</h2>
            <p className="lead" style={{ maxWidth: 520, margin: '0 auto' }}>
              Lo que nos distingue en el mercado de la Riviera Maya y la Península.
            </p>
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
        <div style={{ paddingLeft: '6%', marginBottom: '.6rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Sectores que atendemos
          </span>
        </div>
        <div className="marquee-wrap">
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
              Con sede en la Riviera Maya, atendemos empresas, organizaciones y negocios de toda la Península.
              Nuestra visión es ser el aliado tecnológico estratégico de la región.
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
      <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1e293b 100%)', padding: '80px 6%', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>¿Listo?</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', margin: '.5rem 0 1rem' }}>
            Habla con nuestro equipo hoy
          </h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.65)', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Estamos en la Riviera Maya. Atendemos toda la Península de Yucatán — y respondemos rápido.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar consulta gratuita</Link>
            <button onClick={openWA} className="btn btn-lg" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.2)' }}>
              <i className="fab fa-whatsapp" /> WhatsApp directo
            </button>
          </div>
        </div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* HERO BADGE */
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--blue);
          animation: pulse 2s infinite;
          display: inline-block;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }

        /* MARQUEE */
        .marquee-wrap {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-track {
          display: flex; align-items: center;
          width: max-content;
          animation: marquee-ltr 35s linear infinite;
        }
        .marquee-reverse { animation: marquee-rtl 40s linear infinite; }
        @keyframes marquee-ltr { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes marquee-rtl { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
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
          background: var(--surface2);
          border-radius: 100px;
          border: 1px solid var(--border) !important;
          margin: 0 .4rem;
          padding: .45rem 1.1rem;
        }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-visual {
          background: linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 100%);
          border-radius: 20px; border: 1px solid rgba(21,151,211,.15);
          aspect-ratio: 4/3; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1.2rem;
          position: relative; overflow: hidden;
        }
        .about-visual::before {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(21,151,211,.08);
        }

        /* SERVICE CARDS */
        .srv-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
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
        .srv-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); border-color: rgba(21,151,211,.3); }
        .srv-card:hover::after { transform: scaleX(1); }
        .srv-icon { width: 48px; height: 48px; border-radius: 11px; margin-bottom: 1.2rem; display: flex; align-items: center; justify-content: center; }
        .srv-card h3 { font-size: 1rem; font-weight: 700; color: var(--ink); margin-bottom: .5rem; }
        .srv-card p { font-size: .855rem; color: var(--muted); line-height: 1.65; }
        .more { display: inline-flex; align-items: center; gap: .4rem; margin-top: 1.1rem; font-size: .8rem; font-weight: 700; color: var(--blue); transition: gap .2s; text-decoration: none; }
        .srv-card:hover .more { gap: .7rem; }
        .tag { display: inline-block; font-size: .68rem; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; padding: .25rem .7rem; border-radius: 100px; margin-bottom: .7rem; }
        .tag-infra   { background: rgba(21,151,211,.1);  color: var(--blue-dk); }
        .tag-dev     { background: rgba(99,102,241,.1);  color: #4f46e5; }
        .tag-support { background: rgba(234,179,8,.1);   color: #92400e; }

        /* PRODUCTOS */
        .productos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .producto-card { border-radius: 20px; overflow: hidden; transition: box-shadow .25s, transform .25s; }
        .producto-card:hover { box-shadow: var(--shadow-h); transform: translateY(-4px); }

        /* WHY */
        .why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 3rem; }
        .why-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 2rem 1.5rem; text-align: center; transition: box-shadow .25s, transform .25s; }
        .why-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); }
        .why-card h3 { font-size: .95rem; font-weight: 700; color: var(--ink); margin-bottom: .5rem; }
        .why-card p  { font-size: .845rem; color: var(--muted); line-height: 1.6; }

        /* COVERAGE */
        .cov-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .cov-map {
          background: linear-gradient(135deg, #e8f4fd, #f0f9ff);
          border: 1px solid rgba(21,151,211,.2); border-radius: 20px;
          aspect-ratio: 4/3; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1rem;
        }
        .loc-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; background: var(--white); border: 1px solid var(--border); border-radius: 10px; transition: border-color .2s, box-shadow .2s; }
        .loc-item:hover { border-color: rgba(21,151,211,.35); box-shadow: 0 2px 12px rgba(21,151,211,.1); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .about-grid    { grid-template-columns: 1fr; gap: 3rem; }
          .srv-grid      { grid-template-columns: repeat(2,1fr); }
          .why-grid      { grid-template-columns: repeat(2,1fr); }
          .cov-grid      { grid-template-columns: 1fr; gap: 3rem; }
          .productos-grid{ grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .section       { padding: 72px 5% !important; }
          .srv-grid      { grid-template-columns: 1fr; }
          .why-grid      { grid-template-columns: 1fr; }
          .productos-grid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
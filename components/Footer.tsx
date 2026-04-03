'use client'

import Link from 'next/link'

export default function Footer() {
  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,.7)', padding: '60px 6% 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">

          <div>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px', display: 'block', marginBottom: '1rem', textDecoration: 'none' }}>
              <img src="/logo.png" alt="ACLSYS" style={{ height: '36px', width: 'auto' }} />
            </Link>
            <p style={{ fontSize: '.875rem', lineHeight: 1.7, maxWidth: '240px' }}>
              Infraestructura IT, soporte técnico, desarrollo de software y productos propios para empresas de la Península de Yucatán.
            </p>
            <div style={{ display: 'flex', gap: '.6rem', marginTop: '1.5rem' }}>
              {[
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-whatsapp', onClick: openWA },
                { icon: 'fas fa-envelope', href: 'mailto:info@aclsys.net' },
              ].map((s, i) => (
                <a key={i} href={s.href || '#'} onClick={s.onClick} style={{ width: '34px', height: '34px', borderRadius: '7px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.7)', fontSize: '.85rem', cursor: 'pointer' }}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.2rem' }}>Infraestructura IT</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              {['Ciberseguridad', 'Cloud Solutions', 'Redes & Wi-Fi', 'Backup & Recovery', 'Virtualización'].map((item) => (
                <li key={item}>
                  <Link href="/servicios" style={{ fontSize: '.845rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.2rem' }}>Desarrollo & Soporte</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              {['Desarrollo Web', 'Apps Móviles', 'Software a Medida', 'Consultoría IT'].map((item) => (
                <li key={item}>
                  <Link href="/servicios" style={{ fontSize: '.845rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.2rem' }}>Empresa</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              {[{ label: 'Nosotros', href: '/nosotros' }, { label: 'Proyectos', href: '/proyectos' }, { label: 'Contacto', href: '/contacto' }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: '.845rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <h4 style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--white)', margin: '1.5rem 0 1.2rem' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              <li style={{ fontSize: '.845rem', color: 'rgba(255,255,255,.55)' }}>Riviera Maya, Q. Roo</li>
              <li><a href="mailto:info@aclsys.net" style={{ fontSize: '.845rem', color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>info@aclsys.net</a></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="footer-bot">
          <p style={{ fontSize: '.8rem' }}>© 2025 ACLSYS. Todos los derechos reservados.</p>
          <a href="#" style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Aviso de privacidad</a>
        </div>
      </div>

      <style>{`
        :root { --navy: #0d1117; --white: #ffffff; --blue: #29B5E8; }
        .container { max-width: 1200px; margin: 0 auto; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } .footer-bot { flex-direction: column !important; gap: .8rem !important; text-align: center !important; } }
      `}</style>
    </footer>
  )
}

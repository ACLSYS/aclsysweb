'use client'

import { useDrawer } from '@/context/DrawerContext'

const valores = [
  { icon: 'fas fa-handshake', title: 'Cercanía humana', desc: 'Escuchamos, entendemos y hablamos claro. Detrás de cada empresa hay personas, y trabajamos para ellas.' },
  { icon: 'fas fa-shield-halved', title: 'Confianza y responsabilidad', desc: 'Cuidamos cada sistema, dato y operación como si fuera nuestro. Cumplimos lo que prometemos.' },
  { icon: 'fas fa-sliders', title: 'Simplicidad con propósito', desc: 'La tecnología no debe complicar, debe facilitar. Diseñamos soluciones claras, útiles y bien pensadas.' },
  { icon: 'fas fa-bolt', title: 'Compromiso con la acción', desc: 'Respondemos, resolvemos y avanzamos. No dejamos problemas abiertos.' },
  { icon: 'fas fa-chart-line', title: 'Impacto real', desc: 'Nuestro trabajo se mide en resultados: más eficiencia, menos fallas, más crecimiento.' },
  { icon: 'fas fa-brain', title: 'Evolución constante', desc: 'Nos mantenemos en aprendizaje continuo para ofrecer soluciones actuales, relevantes y sostenibles.' },
  { icon: 'fas fa-circle-check', title: 'Trabajo bien hecho', desc: 'Cuidamos los detalles. La calidad no es opcional, es nuestra forma de trabajar.' },
]

const proceso = [
  { icon: 'fas fa-magnifying-glass', step: '01', title: 'Diagnóstico', desc: 'Entendemos tu operación, tus problemas reales y lo que necesitas.' },
  { icon: 'fas fa-lightbulb', step: '02', title: 'Solución', desc: 'Diseñamos la solución correcta para tu caso, sin tecnología innecesaria.' },
  { icon: 'fas fa-gears', step: '03', title: 'Implementación', desc: 'Ejecutamos con precisión y mínimo impacto en tu operación diaria.' },
  { icon: 'fas fa-headset', step: '04', title: 'Soporte', desc: 'Nos quedamos contigo. Respondemos rápido cuando algo necesita atención.' },
  { icon: 'fas fa-arrow-trend-up', step: '05', title: 'Evolución', desc: 'Tu negocio crece y tu tecnología crece con él. Siempre un paso adelante.' },
]

const stats = [
  { n: '15', s: '+', label: 'Servicios disponibles' },
  { n: '2', s: '', label: 'Productos SaaS propios' },
  { n: '5', s: 'km', label: 'Alcance inalámbrico' },
  { n: '24', s: '/7', label: 'Soporte con contrato' },
]

export default function Nosotros() {
  const { openDrawer } = useDrawer()

  return (
    <>
      <div style={{ padding: '130px 6% 80px', background: 'linear-gradient(180deg, #f0f9ff 0%, var(--white) 100%)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="eyebrow">Nosotros</span>
          <h1 className="heading-xl" style={{ margin: '.5rem 0 1.5rem' }}>
            Tecnología con enfoque<br />
            <span style={{ color: 'var(--blue)' }}>humano y resultados reales</span>
          </h1>
          <p className="lead" style={{ maxWidth: 620 }}>
            Somos el equipo de tecnología que nació en la Riviera Maya para acompañar a las empresas de la región. No solo implementamos soluciones — construimos relaciones y crecemos junto a nuestros clientes.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '40px 6%' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1.5px' }}>
                  {s.n}<span style={{ color: 'var(--blue)' }}>{s.s}</span>
                </div>
                <div style={{ fontSize: '.82rem', color: 'var(--muted)', fontWeight: 500, marginTop: '.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container about-2col">
          <div>
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1.2rem' }}>Un problema real,<br />una solución local</h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              Las empresas de la Riviera Maya merecen tecnología de primer nivel sin depender de proveedores lejanos. ACLSYS nació para ser ese aliado local: cercano, confiable y comprometido con tu operación.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              Integramos infraestructura, desarrollo de software y soporte técnico en un solo equipo. No necesitas hablar con tres proveedores distintos cuando algo falla — nosotros lo resolvemos.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85 }}>
              Estamos aquí, somos de aquí y atendemos aquí. Eso marca la diferencia.
            </p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #e8f7fd 0%, #f0f9ff 100%)', borderRadius: 20, border: '1px solid rgba(21,151,211,.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(21,151,211,.06)' }} />
            <i className="fas fa-location-dot" style={{ fontSize: '3rem', color: 'var(--blue)', position: 'relative', zIndex: 1 }} />
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '.5rem' }}>Riviera Maya, Q. Roo</strong>
              <p style={{ fontSize: '.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 220 }}>Sede principal. Cobertura en toda la Península de Yucatán.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              {['Cancún', 'Playa del Carmen', 'Mérida', 'Campeche', 'Chetumal'].map((c) => (
                <span key={c} style={{ fontSize: '.75rem', fontWeight: 600, padding: '.3rem .8rem', borderRadius: 100, background: 'rgba(21,151,211,.1)', color: 'var(--blue-dk)', border: '1px solid rgba(21,151,211,.2)' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Lo que nos mueve</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0' }}>Misión y Visión</h2>
          </div>
          <div className="mv-grid">
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem', borderTop: '3px solid var(--blue)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(21,151,211,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <i className="fas fa-bullseye" style={{ color: 'var(--blue)', fontSize: '1.2rem' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '.8rem' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.85 }}>
                Acompañamos a las empresas en su crecimiento mediante soluciones tecnológicas integrales que realmente funcionan. Integramos infraestructura, desarrollo y soporte en un solo ecosistema, con un enfoque claro: simplificar la tecnología, proteger la operación y generar resultados reales para cada cliente.
              </p>
            </div>
            <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '2.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <i className="fas fa-eye" style={{ color: 'var(--blue)', fontSize: '1.2rem' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '.8rem' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.85 }}>
                Ser el aliado tecnológico más confiable de la región, reconocido no solo por lo que implementamos, sino por cómo lo hacemos: con cercanía, compromiso y excelencia. Queremos hacer la tecnología más accesible, eficiente y humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Nuestra forma de trabajar</h2>
            <p className="lead" style={{ maxWidth: 500, margin: '0 auto' }}>No solo resolvemos problemas. Construimos relaciones y acompañamos el crecimiento.</p>
          </div>
          <div className="proceso-grid">
            {proceso.map((p) => (
              <div key={p.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(21,151,211,.1)', border: '2px solid rgba(21,151,211,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '.8rem' }}>
                  <i className={p.icon} style={{ color: 'var(--blue)', fontSize: '1rem' }} />
                </div>
                <span style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--blue)', marginBottom: '.3rem' }}>{p.step}</span>
                <h4 style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '.4rem' }}>{p.title}</h4>
                <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Lo que nos define</span>
            <h2 className="heading-lg" style={{ margin: '.5rem 0 1rem' }}>Nuestros valores</h2>
            <p className="lead" style={{ maxWidth: 480, margin: '0 auto' }}>No son valores de pared. Son la forma en que tomamos decisiones todos los días.</p>
          </div>
          <div className="valores-grid">
            {valores.map((v) => (
              <div key={v.title} className="valor-card">
                <div style={{ width: 44, height: 44, borderRadius: 11, background: 'rgba(21,151,211,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <i className={v.icon} style={{ color: 'var(--blue)', fontSize: '1rem' }} />
                </div>
                <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '.4rem' }}>{v.title}</h3>
                <p style={{ fontSize: '.845rem', color: 'var(--muted)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1e293b 100%)', padding: '80px 6%', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>¿Trabajamos juntos?</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', margin: '.5rem 0 1rem' }}>Cuéntanos qué necesitas</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.65)', maxWidth: 460, margin: '0 auto 2.5rem' }}>
            Sin compromisos. Te escuchamos y te decimos honestamente si podemos ayudarte.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openDrawer} className="btn btn-primary btn-lg">Hablemos</button>
            <button className="btn btn-lg" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.2)' }}
              onClick={() => window.open(`https://wa.me/529871039604?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')}`, '_blank')}>
              <i className="fab fa-whatsapp" /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .about-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .proceso-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; }
        .valores-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
        .valor-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 1.8rem; transition: box-shadow .25s, transform .25s; }
        .valor-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); }
        @media (max-width: 1024px) {
          .about-2col { grid-template-columns: 1fr; gap: 3rem; }
          .proceso-grid { grid-template-columns: repeat(3, 1fr); }
          .valores-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .mv-grid { grid-template-columns: 1fr; }
          .proceso-grid { grid-template-columns: repeat(2, 1fr); }
          .valores-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
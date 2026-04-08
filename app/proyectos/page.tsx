'use client'

import { useDrawer } from '@/context/DrawerContext'
import { useState } from 'react'

const proyectos = [
  {
    img: '/proyectos/birding.jpg',
    categoria: 'Desarrollo Web',
    categoriaColor: 'rgba(99,102,241,.1)',
    categoriaText: '#4f46e5',
    title: 'Cozumel Birding Tours',
    desc: 'Sitio web profesional bilingüe (ES/EN) para guía de aviturismo en Cozumel. Incluye catálogo de tours con precios, galería de aves, reseñas de TripAdvisor y sistema de contacto.',
    tags: ['Next.js', 'Bilingüe', 'SEO', 'Responsive'],
    url: 'https://www.cozumelbirdingtours.com',
    giro: 'Turismo · Cozumel, Q. Roo',
  },
  {
    img: '/proyectos/accesfy.jpg',
    categoria: 'Producto SaaS',
    categoriaColor: 'rgba(21,151,211,.1)',
    categoriaText: 'var(--blue-dk)',
    title: 'Accesfy',
    desc: 'Sistema de gestión y control de acceso para gimnasios. Administración de membresías, control de entradas, reportes en tiempo real y panel de administración web.',
    tags: ['SaaS Propio', 'Gimnasios', 'Control de Acceso', 'Dashboard'],
    url: 'https://accesfy.app',
    giro: 'Software · Producto ACLSYS',
  },
  {
    img: '/proyectos/rack.jpg',
    categoria: 'Infraestructura IT',
    categoriaColor: 'rgba(21,151,211,.1)',
    categoriaText: 'var(--blue-dk)',
    title: 'Instalación de Rack',
    desc: 'Diseño, montaje y cableado estructurado de rack de telecomunicaciones. Organización de patch panels, switches y equipos de red para operación empresarial.',
    tags: ['Redes', 'Cableado', 'Rack', 'Infraestructura'],
    url: null,
    giro: 'Infraestructura · Riviera Maya',
  },
  {
    img: '/proyectos/camaras.jpg',
    categoria: 'Infraestructura IT',
    categoriaColor: 'rgba(21,151,211,.1)',
    categoriaText: 'var(--blue-dk)',
    title: 'Sistema CCTV',
    desc: 'Instalación y configuración de sistema de videovigilancia IP. Cámaras interiores y exteriores con acceso remoto desde cualquier dispositivo y grabación en la nube.',
    tags: ['CCTV', 'IP', 'Acceso remoto', 'Seguridad'],
    url: null,
    giro: 'Seguridad · Riviera Maya',
  },
  {
    img: '/proyectos/pc-gamer.jpg',
    categoria: 'Soporte & Hardware',
    categoriaColor: 'rgba(234,179,8,.1)',
    categoriaText: '#b45309',
    title: 'Ensamblado PC Gamer',
    desc: 'Ensamblado profesional de PC gamer de alto rendimiento. Selección de componentes, pruebas de estrés, instalación de sistema operativo y configuración completa.',
    tags: ['PC Gamer', 'Hardware', 'Ensamblado', 'Gaming'],
    url: null,
    giro: 'Hardware · Riviera Maya',
  },
  {
    img: '/proyectos/limpieza-pc.jpg',
    categoria: 'Soporte & Hardware',
    categoriaColor: 'rgba(234,179,8,.1)',
    categoriaText: '#b45309',
    title: 'Mantenimiento de PCs',
    desc: 'Limpieza interna, cambio de pasta térmica, diagnóstico de hardware y software. Equipos que vuelven a funcionar como nuevos y a temperatura óptima.',
    tags: ['Mantenimiento', 'Limpieza', 'Hardware', 'Preventivo'],
    url: null,
    giro: 'Hardware · Riviera Maya',
  },
]

const categorias = ['Todos', 'Desarrollo Web', 'Producto SaaS', 'Infraestructura IT', 'Soporte & Hardware']

export default function Proyectos() {
  const { openDrawer } = useDrawer()
  const [activo, setActivo] = useState('Todos')  // ← corregido

  const filtrados = activo === 'Todos'
    ? proyectos
    : proyectos.filter((p) => p.categoria === activo)

  return (
    <>
      {/* ── HERO ── */}
      <div style={{
        padding: '130px 6% 80px',
        background: 'linear-gradient(180deg, #f0f9ff 0%, var(--white) 100%)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="eyebrow">Lo que hemos hecho</span>
          <h1 className="heading-xl" style={{ margin: '.5rem 0 1rem' }}>Proyectos</h1>
          <p className="lead" style={{ maxWidth: 560, margin: '0 auto' }}>
            Desde sitios web hasta infraestructura de red. Aquí algunos de los proyectos
            que hemos entregado para empresas y emprendedores de la región.
          </p>
        </div>
      </div>

      {/* ── FILTROS ── */}
      <div className="filtros-wrap">
        <div className="container">
          <div className="filtros-inner">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setActivo(c)}
                className={`filtro-chip ${activo === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="section">
        <div className="container">
          <div className="proyectos-grid">
            {filtrados.map((p) => (
              <div key={p.title} className="proyecto-card">

                {/* IMAGEN */}
                <div className="proyecto-img-wrap">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="proyecto-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x500/e8f7fd/1597D3?text=${encodeURIComponent(p.title)}`
                    }}
                  />
                  <div className="proyecto-overlay">
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '.8rem', padding: '.5rem 1.1rem' }}>
                        Ver sitio <i className="fas fa-arrow-up-right-from-square" />
                      </a>
                    )}
                  </div>
                  <span className="proyecto-cat" style={{ background: p.categoriaColor, color: p.categoriaText }}>
                    {p.categoria}
                  </span>
                </div>

                {/* INFO */}
                <div className="proyecto-body">
                  <p style={{ fontSize: '.75rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '.4rem' }}>
                    <i className="fas fa-location-dot" style={{ color: 'var(--blue)', marginRight: '.3rem' }} />
                    {p.giro}
                  </p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '.6rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '.845rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ fontSize: '.7rem', fontWeight: 600, padding: '.2rem .65rem', borderRadius: 100, background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1e293b 100%)', padding: '80px 6%', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>¿Tu proyecto aquí?</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', margin: '.5rem 0 1rem' }}>
            Trabajemos juntos
          </h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.65)', maxWidth: 460, margin: '0 auto 2.5rem' }}>
            Cuéntanos qué necesitas y lo hacemos realidad.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openDrawer} className="btn btn-primary btn-lg">Iniciar proyecto</button>
            <button
              className="btn btn-lg"
              style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.2)' }}
              onClick={() => window.open(`https://wa.me/529871039604?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')}`, '_blank')}
            >
              <i className="fab fa-whatsapp" /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .filtros-wrap { position: sticky; top: 68px; z-index: 900; background: rgba(255,255,255,.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 14px 0; }
        .filtros-inner { display: flex; gap: .6rem; flex-wrap: wrap; }
        .filtro-chip { display: inline-flex; align-items: center; padding: .45rem 1.1rem; border-radius: 100px; font-size: .82rem; font-weight: 600; border: 1.5px solid var(--border); background: var(--white); color: var(--muted); cursor: pointer; transition: all .2s; white-space: nowrap; font-family: inherit; }
        .filtro-chip:hover { border-color: var(--blue); color: var(--blue); }
        .filtro-chip.active { background: var(--blue); border-color: var(--blue); color: #fff; }
        .proyectos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .proyecto-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: box-shadow .25s, transform .25s; }
        .proyecto-card:hover { box-shadow: var(--shadow-h); transform: translateY(-4px); }
        .proyecto-img-wrap { position: relative; aspect-ratio: 3/2; overflow: hidden; }
        .proyecto-img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .proyecto-card:hover .proyecto-img { transform: scale(1.05); }
        .proyecto-overlay { position: absolute; inset: 0; background: rgba(13,17,23,.45); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity .3s; }
        .proyecto-card:hover .proyecto-overlay { opacity: 1; }
        .proyecto-cat { position: absolute; top: 12px; left: 12px; font-size: .68rem; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; padding: .25rem .7rem; border-radius: 100px; }
        .proyecto-body { padding: 1.4rem 1.6rem 1.6rem; }
        @media (max-width: 1024px) { .proyectos-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .proyectos-grid { grid-template-columns: 1fr; } .filtros-inner { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; } .filtros-inner::-webkit-scrollbar { display: none; } }
      `}</style>
    </>
  )
}
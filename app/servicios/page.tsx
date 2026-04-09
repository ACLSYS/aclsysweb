'use client'

import { useState } from 'react'
import { useDrawer } from '@/context/DrawerContext'

type Categoria = 'Todos' | 'Infraestructura' | 'Desarrollo' | 'Soporte'

const servicios = [

  // ── INFRAESTRUCTURA (1-7) ──
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-shield-halved',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Ciberseguridad',
    desc: 'Protección integral para la infraestructura digital de tu empresa contra amenazas modernas.',
    problemas: [
      'Ransomware, phishing y accesos no autorizados',
      'Falta de visibilidad sobre la red o endpoints',
      'Respuesta reactiva ante incidentes',
      'Sin políticas de auditoría o trazabilidad',
    ],
    valores: [
      'Arquitecturas defense-in-depth y Zero Trust',
      'Firewalls, EDR, WAF, MFA, SIEM',
      'Servicios administrados y simulacros',
      'Consultoría de madurez y cumplimiento',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-wifi',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Redes & Conectividad',
    desc: 'Diseño e implementación de redes corporativas modernas con tecnología Ubiquiti, MikroTik y Cisco.',
    problemas: [
      'Cobertura Wi-Fi deficiente o inestable',
      'Redes lentas o con cuellos de botella',
      'Sin segmentación ni control de acceso',
      'Usuarios remotos sin conectividad segura',
    ],
    valores: [
      'Redes LAN, Wi-Fi 6, SD-WAN, VLANs',
      'Enlaces Ubiquiti punto a punto hasta 5km',
      'MikroTik, TP-Link, Cisco y Fortinet',
      'Monitoreo proactivo y automatización',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-cloud',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Cloud Solutions',
    desc: 'Migra, escala y controla tu infraestructura desde cualquier lugar con máxima seguridad.',
    problemas: [
      'Limitaciones de crecimiento on-premise',
      'Costos desalineados con el uso real',
      'Dificultad para migrar servicios a la nube',
      'Sin visibilidad de cargas distribuidas',
    ],
    valores: [
      'Nubes públicas, privadas e híbridas',
      'Migración y orquestación con Kubernetes',
      'Backup cloud y cumplimiento regulatorio',
      'Monitoreo y optimización de costos',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-server',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Infraestructura y Servidores',
    desc: 'Plataformas de cómputo de alto rendimiento para aplicaciones críticas de tu empresa.',
    problemas: [
      'Procesos lentos o cuellos de botella',
      'Infraestructura heterogénea difícil de gestionar',
      'Escalabilidad limitada',
      'Altos costos por baja utilización',
    ],
    valores: [
      'Servidores de alto rendimiento',
      'Arquitecturas optimizadas next-gen',
      'Integración con virtualización y almacenamiento',
      'Soporte, monitoreo y evolución continua',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-camera',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Cámaras CCTV',
    desc: 'Instalación y configuración de sistemas de videovigilancia para tu negocio o instalación.',
    problemas: [
      'Sin visibilidad de áreas críticas',
      'Equipos obsoletos o sin grabación en la nube',
      'Sin acceso remoto a las cámaras',
      'Cobertura incompleta del perímetro',
    ],
    valores: [
      'Instalación profesional en campo',
      'Cámaras IP, analógicas y PTZ',
      'Acceso remoto desde cualquier dispositivo',
      'Grabación local y en la nube',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-database',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Backup y Recuperación',
    desc: 'Protege lo más valioso de tu empresa: tu información. Estrategias de respaldo adaptadas a tu riesgo.',
    problemas: [
      'Pérdida de datos por ransomware o error humano',
      'Tiempos de restauración largos',
      'Respaldos desactualizados o no verificados',
      'Sin políticas de retención y archivado',
    ],
    valores: [
      'Respaldos locales, remotos e inmutables',
      'Método 3-2-1-1-0 aplicado',
      'Verificación y recuperación automatizada',
      'Cumplimiento regulatorio y auditorías',
    ],
  },
  {
    categoria: 'Infraestructura' as Categoria,
    icon: 'fas fa-cube',
    iconBg: 'rgba(21,151,211,.1)',
    iconColor: 'var(--blue)',
    tag: 'Infraestructura & Redes',
    title: 'Virtualización',
    desc: 'Flexibilidad, eficiencia y control en cada entorno IT mediante virtualización de servidores y escritorios.',
    problemas: [
      'Infraestructura sobredimensionada o subutilizada',
      'Bajo rendimiento por entornos fragmentados',
      'Alta carga de gestión manual',
      'Dificultad para escalar sin aumentar complejidad',
    ],
    valores: [
      'VMware vSphere, Hyper-V, Proxmox',
      'Consolidación y alta disponibilidad',
      'Balanceo de carga y disaster recovery',
      'Eficiencia operativa garantizada',
    ],
  },

  // ── DESARROLLO (8-11) ──
  {
    categoria: 'Desarrollo' as Categoria,
    icon: 'fas fa-code',
    iconBg: 'rgba(99,102,241,.1)',
    iconColor: '#4f46e5',
    tag: 'Desarrollo & Software',
    title: 'Desarrollo Web',
    desc: 'Sitios web y plataformas digitales de alto rendimiento para tu empresa con tecnologías modernas.',
    problemas: [
      'Sin presencia digital profesional',
      'Sitio web lento o desactualizado',
      'Sin SEO ni optimización para buscadores',
      'Plataforma que no escala con tu negocio',
    ],
    valores: [
      'Next.js, React, TypeScript, Tailwind CSS',
      'Diseño profesional 100% responsive',
      'SEO optimizado y PageSpeed +90',
      'Deploy en Vercel con SSL y CDN global',
    ],
  },
  {
    categoria: 'Desarrollo' as Categoria,
    icon: 'fas fa-mobile-screen',
    iconBg: 'rgba(99,102,241,.1)',
    iconColor: '#4f46e5',
    tag: 'Desarrollo & Software',
    title: 'Aplicaciones Móviles',
    desc: 'Apps iOS y Android nativas o cross-platform para llevar tu negocio al bolsillo de tus clientes.',
    problemas: [
      'Sin canal móvil para tus clientes',
      'Procesos manuales que podrían automatizarse',
      'Sin integración con sistemas existentes',
      'Apps genéricas que no reflejan tu marca',
    ],
    valores: [
      'React Native — iOS y Android desde un código',
      'Diseño UX/UI profesional',
      'Integración con APIs y sistemas internos',
      'Publicación en App Store y Google Play',
    ],
  },
  {
    categoria: 'Desarrollo' as Categoria,
    icon: 'fas fa-laptop-code',
    iconBg: 'rgba(99,102,241,.1)',
    iconColor: '#4f46e5',
    tag: 'Desarrollo & Software',
    title: 'Software a Medida',
    desc: 'Sistemas internos y plataformas personalizadas que automatizan y optimizan los procesos de tu empresa.',
    problemas: [
      'Procesos manuales que consumen tiempo',
      'Sin sistema centralizado de gestión',
      'Software genérico que no se adapta a tu negocio',
      'Datos dispersos en hojas de cálculo',
    ],
    valores: [
      'CRMs, ERPs y sistemas de gestión a medida',
      'Automatización con n8n e integraciones IA',
      'Laravel, Node.js, Docker',
      'Dashboard y reportes en tiempo real',
    ],
  },
  {
    categoria: 'Desarrollo' as Categoria,
    icon: 'fas fa-comments',
    iconBg: 'rgba(99,102,241,.1)',
    iconColor: '#4f46e5',
    tag: 'Desarrollo & Software',
    title: 'Consultoría IT',
    desc: 'Estrategia tecnológica para que tu empresa tome las decisiones correctas y evite errores costosos.',
    problemas: [
      'Sin visión tecnológica clara a mediano plazo',
      'Inversiones en tecnología sin retorno',
      'Proveedores que no entienden tu negocio',
      'Sin plan de continuidad ante fallas',
    ],
    valores: [
      'Diagnóstico completo de infraestructura actual',
      'Planificación tecnológica estratégica',
      'Evaluación de proveedores y soluciones',
      'Acompañamiento en la toma de decisiones',
    ],
  },

  // ── SOPORTE (12-14) — sin impresoras ──
  {
    categoria: 'Soporte' as Categoria,
    icon: 'fas fa-headset',
    iconBg: 'rgba(234,179,8,.1)',
    iconColor: '#b45309',
    tag: 'Soporte & Hardware',
    title: 'Soporte Técnico',
    desc: 'Soporte presencial y remoto para resolver problemas técnicos de tu empresa de forma rápida y efectiva.',
    problemas: [
      'Problemas técnicos sin resolución rápida',
      'Sin soporte especializado disponible',
      'Tiempo de inactividad que afecta la operación',
      'Múltiples proveedores para un solo problema',
    ],
    valores: [
      'Soporte presencial en la Riviera Maya',
      'Soporte remoto para toda la Península',
      'Tiempo de respuesta garantizado con contrato',
      'Un solo proveedor para todos tus problemas',
    ],
  },
  {
    categoria: 'Soporte' as Categoria,
    icon: 'fas fa-laptop',
    iconBg: 'rgba(234,179,8,.1)',
    iconColor: '#b45309',
    tag: 'Soporte & Hardware',
    title: 'Mantenimiento de Laptops',
    desc: 'Limpieza, mantenimiento preventivo y reparación de laptops para que tu equipo siempre funcione al 100%.',
    problemas: [
      'Laptops lentas o con sobrecalentamiento',
      'Fallas de hardware o software frecuentes',
      'Sin mantenimiento preventivo programado',
      'Pérdida de productividad por equipos fallidos',
    ],
    valores: [
      'Limpieza interna y cambio de pasta térmica',
      'Diagnóstico completo de hardware y software',
      'Reemplazo de piezas y actualización de RAM/SSD',
      'Servicio presencial o a domicilio',
    ],
  },
  {
    categoria: 'Soporte' as Categoria,
    icon: 'fas fa-desktop',
    iconBg: 'rgba(234,179,8,.1)',
    iconColor: '#b45309',
    tag: 'Soporte & Hardware',
    title: 'Ensamblado de PC',
    desc: 'Ensamblamos PCs a medida — gamer, workstation o de oficina — con los componentes que mejor se adaptan a tu uso.',
    problemas: [
      'PCs prearmadas con componentes de baja calidad',
      'Equipos que no rinden para tu trabajo',
      'Sin garantía de compatibilidad entre componentes',
      'Precios inflados en equipos de tienda',
    ],
    valores: [
      'Selección de componentes según tu presupuesto',
      'Ensamblado profesional con pruebas de estrés',
      'PCs gamer, workstation y de oficina',
      'Garantía en mano de obra e instalación de OS',
    ],
  },
]

const filtros: Categoria[] = ['Todos', 'Infraestructura', 'Desarrollo', 'Soporte']

const filtroLabels: Record<Categoria, string> = {
  'Todos': 'Todos',
  'Infraestructura': 'Infraestructura & Redes',
  'Desarrollo': 'Desarrollo & Software',
  'Soporte': 'Soporte & Hardware',
}

export default function Servicios() {
  const [activo, setActivo] = useState<Categoria>('Todos')
  const { openDrawer } = useDrawer()

  const filtrados = activo === 'Todos'
    ? servicios
    : servicios.filter((s) => s.categoria === activo)

  return (
    <>
      <div style={{ padding: '120px 6% 60px', background: 'linear-gradient(180deg, #f0f9ff 0%, var(--white) 100%)', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Lo que hacemos</span>
          <h1 className="heading-xl" style={{ margin: '.5rem 0 1rem' }}>Nuestros Servicios</h1>
          <p className="lead" style={{ maxWidth: 580, margin: '0 auto' }}>
            Infraestructura en campo, soporte técnico y desarrollo de software. Todo lo que tu empresa necesita en tecnología — en un solo proveedor.
          </p>
        </div>
      </div>

      <div className="filtros-wrap">
        <div className="container">
          <div className="filtros-inner">
            {filtros.map((f) => (
              <button key={f} onClick={() => setActivo(f)} className={`filtro-chip ${activo === f ? 'active' : ''}`}>
                {filtroLabels[f]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '2rem' }}>
            Mostrando <strong style={{ color: 'var(--ink)' }}>{filtrados.length}</strong> servicios
            {activo !== 'Todos' && <> en <strong style={{ color: 'var(--blue)' }}>{filtroLabels[activo]}</strong></>}
          </p>
          <div className="srv-full-grid">
            {filtrados.map((s) => (
              <div key={s.title} className="srv-full-card">
                <div className="srv-full-head">
                  <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={s.icon} style={{ fontSize: '1.35rem', color: s.iconColor }} />
                  </div>
                  <div>
                    <span className="srv-tag">{s.tag}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
                <div className="srv-full-body">
                  <div>
                    <div className="srv-block-title">Problemas que resolvemos</div>
                    <ul className="srv-list">
                      {s.problemas.map((p) => (
                        <li key={p}>
                          <i className="fas fa-xmark" style={{ color: '#ef4444', fontSize: '.75rem', flexShrink: 0, marginTop: 2 }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="srv-block-title">Lo que aportamos</div>
                    <ul className="srv-list">
                      {s.valores.map((v) => (
                        <li key={v}>
                          <i className="fas fa-check" style={{ color: 'var(--blue)', fontSize: '.75rem', flexShrink: 0, marginTop: 2 }} />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="srv-full-cta">
                  <span>¿Te interesa este servicio?</span>
                  <button onClick={openDrawer} className="btn btn-primary">
                    Cotizar <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1e293b 100%)', padding: '80px 6%', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>¿Dudas?</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', margin: '.5rem 0 1rem' }}>¿No encuentras lo que buscas?</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.65)', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Contáctanos y diseñamos la solución tecnológica ideal para tu empresa.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openDrawer} className="btn btn-primary btn-lg">Contactar ahora</button>
            <button className="btn btn-lg" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,.2)' }}
              onClick={() => window.open(`https://wa.me/529871039604?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')}`, '_blank')}>
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
        .srv-full-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .srv-full-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: box-shadow .25s, transform .25s; display: flex; flex-direction: column; }
        .srv-full-card:hover { box-shadow: var(--shadow-h); transform: translateY(-3px); }
        .srv-full-head { padding: 1.8rem 2rem 1.4rem; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; gap: 1.2rem; }
        .srv-full-head h3 { font-size: 1.05rem; font-weight: 700; color: var(--ink); margin: .25rem 0 .3rem; }
        .srv-full-head p { font-size: .855rem; color: var(--muted); line-height: 1.6; }
        .srv-tag { display: inline-block; font-size: .68rem; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; padding: .2rem .6rem; border-radius: 100px; background: var(--surface); color: var(--muted); margin-bottom: .3rem; }
        .srv-full-body { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; padding: 1.6rem 2rem; flex: 1; }
        .srv-block-title { font-size: .7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--muted); margin-bottom: .8rem; padding-bottom: .5rem; border-bottom: 1px solid var(--border); }
        .srv-list { list-style: none; display: flex; flex-direction: column; gap: .55rem; }
        .srv-list li { display: flex; align-items: flex-start; gap: .6rem; font-size: .845rem; color: var(--ink2); line-height: 1.5; }
        .srv-full-cta { padding: 1rem 2rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .srv-full-cta span { font-size: .8rem; color: var(--muted); }
        @media (max-width: 1024px) { .srv-full-body { grid-template-columns: 1fr; gap: 1rem; } }
        @media (max-width: 768px) { .srv-full-grid { grid-template-columns: 1fr; } .filtros-inner { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; } .filtros-inner::-webkit-scrollbar { display: none; } .srv-full-head { flex-direction: column; gap: .8rem; } .srv-full-cta { flex-direction: column; align-items: flex-start; } .srv-full-cta .btn { width: 100%; justify-content: center; } }
      `}</style>
    </>
  )
}
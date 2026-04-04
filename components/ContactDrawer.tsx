'use client'

import { useDrawer } from '@/context/DrawerContext'
import { useState } from 'react'

const serviceOptions = [
  {
    group: 'Infraestructura IT',
    items: [
      'Ciberseguridad',
      'Cloud Solutions',
      'Infraestructura y Servidores',
      'Redes y Comunicaciones',
      'Cámaras CCTV',
      'Enlace inalámbrico Ubiquiti',
      'Backup y Recuperación',
      'Virtualización',
    ],
  },
  {
    group: 'Soporte & Hardware',
    items: [
      'Mantenimiento de laptops',
      'Reparación de impresoras',
      'Ensamblado de PC',
      'Soporte técnico presencial',
      'Soporte técnico remoto',
    ],
  },
  {
    group: 'Desarrollo & Software',
    items: [
      'Desarrollo Web',
      'Aplicaciones Móviles',
      'Software a Medida',
      'Consultoría IT',
    ],
  },
  {
    group: 'Productos Propios',
    items: [
      'Accesfy — Control de acceso',
      'Reservfy — Motor de reservas',
    ],
  },
]

export default function ContactDrawer() {
  const { isOpen, closeDrawer } = useDrawer()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  const handleClose = () => {
    closeDrawer()
    setTimeout(() => setSent(false), 400)
  }

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          background: 'rgba(14,46,71,.45)',
          backdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity .35s ease',
        }}
      />

      {/* DRAWER */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 1200,
        width: '100%', maxWidth: '480px',
        background: 'var(--white)',
        boxShadow: '-8px 0 40px rgba(0,0,0,.15)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
      }}>

        {/* HEADER */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: 'var(--white)', zIndex: 10,
        }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '.15rem' }}>
              Contáctanos
            </h2>
            <p style={{ fontSize: '.8rem', color: 'var(--muted)' }}>
              Respondemos en menos de 24 horas
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'var(--surface2)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--muted)', fontSize: '1rem',
              transition: 'background .2s',
            }}
          >
            <i className="fas fa-xmark" />
          </button>
        </div>

        {/* CONTENT */}
        <div style={{ padding: '1.8rem 2rem', flex: 1 }}>

          {sent ? (
            /* SUCCESS STATE */
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(21,151,211,.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}>
                <i className="fas fa-check" style={{ fontSize: '1.5rem', color: 'var(--blue)' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '.5rem' }}>
                ¡Mensaje enviado!
              </h3>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Recibimos tu mensaje. Nuestro equipo te contactará en menos de 24 horas.
              </p>
              <button onClick={handleClose} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '.8rem' }}>
                Cerrar
              </button>
            </div>
          ) : (
            /* FORM */
            <form onSubmit={handleSubmit}>

              {/* INFO RÁPIDA */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem',
                marginBottom: '1.8rem',
              }}>
                {[
                  { icon: 'fas fa-map-location-dot', text: 'Riviera Maya, Q. Roo' },
                  { icon: 'fas fa-clock',            text: 'Lun–Vie 9:00–18:00' },
                  { icon: 'fas fa-envelope',         text: 'info@aclsys.net' },
                  { icon: 'fas fa-headset',          text: 'Soporte 24/7 con contrato' },
                ].map((item) => (
                  <div key={item.text} style={{
                    display: 'flex', alignItems: 'center', gap: '.5rem',
                    padding: '.6rem .8rem', background: 'var(--surface)',
                    borderRadius: 8, border: '1px solid var(--border)',
                  }}>
                    <i className={item.icon} style={{ color: 'var(--blue)', fontSize: '.8rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '.75rem', color: 'var(--ink2)', fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CAMPOS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="fg">
                    <label>Nombre *</label>
                    <input type="text" placeholder="Tu nombre" required />
                  </div>
                  <div className="fg">
                    <label>Empresa</label>
                    <input type="text" placeholder="Tu empresa" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="fg">
                    <label>Email *</label>
                    <input type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="fg">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="+52 984 000 0000" />
                  </div>
                </div>

                <div className="fg">
                  <label>Servicio de interés</label>
                  <select>
                    <option value="">Selecciona un servicio…</option>
                    {serviceOptions.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.items.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="otro">No estoy seguro / Necesito orientación</option>
                  </select>
                </div>

                <div className="fg">
                  <label>Mensaje *</label>
                  <textarea
                    placeholder="Cuéntanos sobre tu proyecto, necesidad o pregunta…"
                    required
                    style={{ minHeight: 110 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '.85rem', fontSize: '.95rem', borderRadius: 10 }}
                >
                  {loading
                    ? <><i className="fas fa-spinner fa-spin" /> Enviando…</>
                    : <><i className="fas fa-paper-plane" /> Enviar mensaje</>
                  }
                </button>

              </div>

            </form>
          )}

          {/* WHATSAPP BLOCK */}
          {!sent && (
            <div
              onClick={openWA}
              style={{
                marginTop: '1.5rem', padding: '1.2rem 1.4rem',
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                borderRadius: 12, display: 'flex', alignItems: 'center',
                gap: '1rem', cursor: 'pointer', transition: 'box-shadow .2s',
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.8rem', color: '#16a34a', flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '.9rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '.15rem' }}>
                  WhatsApp — Respuesta inmediata
                </strong>
                <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>
                  Haz click para abrir el chat directo con nuestro equipo
                </span>
              </div>
              <i className="fas fa-arrow-right" style={{ color: 'var(--muted)', fontSize: '.85rem', marginLeft: 'auto', flexShrink: 0 }} />
            </div>
          )}

        </div>
      </aside>

      {/* ESTILOS */}
      <style>{`
        .fg {
          display: flex;
          flex-direction: column;
          gap: .4rem;
        }
        .fg label {
          font-size: .72rem;
          font-weight: 700;
          color: var(--muted);
          letter-spacing: .5px;
          text-transform: uppercase;
        }
        .fg input,
        .fg textarea,
        .fg select {
          border: 1.5px solid var(--border);
          border-radius: 8px;
          padding: .7rem .9rem;
          font-family: inherit;
          font-size: .875rem;
          color: var(--ink2);
          background: var(--white);
          transition: border-color .2s, box-shadow .2s;
          outline: none;
          width: 100%;
        }
        .fg input:focus,
        .fg textarea:focus,
        .fg select:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(21,151,211,.1);
        }
        .fg textarea { resize: vertical; }

        @media (max-width: 480px) {
          aside { max-width: 100% !important; }
        }
      `}</style>
    </>
  )
}
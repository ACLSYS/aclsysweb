'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        height: '68px',
        display: 'flex', alignItems: 'center',
        padding: '0 6%',
        transition: 'box-shadow .3s',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.08)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* LOGO */}
          <Link href="/" style={{
            fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink)',
            letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '2px',
            textDecoration: 'none',
          }}>
           <img src="/logo.png" alt="ACLSYS" style={{ height: '36px', width: 'auto' }} />
          </Link>

          {/* LINKS DESKTOP */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: '.25rem', listStyle: 'none',
          }} className="nav-links-desktop">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/nosotros', label: 'Nosotros' },
              { href: '/proyectos', label: 'Proyectos' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} style={{
                  display: 'block', padding: '.5rem .9rem',
                  fontSize: '.875rem', fontWeight: 500, color: 'var(--muted)',
                  borderRadius: '7px', transition: 'color .2s, background .2s',
                  textDecoration: 'none',
                }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ACTIONS DESKTOP */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }} className="nav-actions-desktop">
            <Link href="/contacto" style={{
              background: 'transparent', color: 'var(--muted)', padding: '.5rem .9rem',
              borderRadius: '7px', fontSize: '.875rem', fontWeight: 600,
              textDecoration: 'none', transition: 'color .2s, background .2s',
            }}>
              Contacto
            </Link>
            <button onClick={openWA} style={{
              background: 'var(--blue)', color: '#fff', padding: '.55rem 1.2rem',
              borderRadius: '10px', border: 'none', fontSize: '.875rem', fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.4rem',
              boxShadow: '0 2px 8px rgba(41,181,232,.3)', transition: 'all .2s',
              fontFamily: 'inherit',
            }}>
              <i className="fab fa-whatsapp" /> WhatsApp
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Menú"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              flexDirection: 'column', gap: '5px', padding: '4px', display: 'none',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', borderRadius: '2px', transition: '.3s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', borderRadius: '2px', transition: '.3s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', borderRadius: '2px', transition: '.3s' }} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 999,
          background: 'var(--white)', borderBottom: '1px solid var(--border)',
          padding: '1.2rem 6%', display: 'flex', flexDirection: 'column', gap: '.5rem',
        }}>
          {[
            { href: '/', label: 'Inicio' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/proyectos', label: 'Proyectos' },
            { href: '/contacto', label: 'Contacto' },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '.7rem 1rem', fontWeight: 500, color: 'var(--ink2)',
                borderRadius: '8px', textDecoration: 'none', transition: 'background .2s',
                fontSize: '.95rem',
              }}
            >
              {item.label}
            </Link>
          ))}
          <button onClick={() => { openWA(); setMenuOpen(false) }} style={{
            marginTop: '.5rem', background: 'var(--blue)', color: '#fff',
            border: 'none', borderRadius: '10px', padding: '.8rem 1rem',
            fontWeight: 600, fontSize: '.95rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
            fontFamily: 'inherit',
          }}>
            <i className="fab fa-whatsapp" /> WhatsApp
          </button>
        </div>
      )}

      <style>{`
        :root {
          --white: #ffffff;
          --blue: #29B5E8;
          --blue-d: #1a9fd4;
          --ink: #0d1117;
          --ink2: #1e293b;
          --muted: #64748b;
          --border: #e2e8f0;
          --surface: #f1f5f9;
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-actions-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

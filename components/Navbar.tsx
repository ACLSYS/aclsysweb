'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDrawer } from '@/context/DrawerContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openDrawer } = useDrawer()

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
<Link href="/">
  <img
    src="/logo.png"
    alt="ACLSYS"
    style={{ height: '38px', width: 'auto', display: 'block' }}
  />
</Link>

          {/* LINKS DESKTOP */}
          <ul className="nav-links-desktop" style={{
            display: 'flex', alignItems: 'center', gap: '.25rem', listStyle: 'none',
          }}>
            {[
              { href: '/',          label: 'Inicio' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/nosotros',  label: 'Nosotros' },
              { href: '/proyectos', label: 'Proyectos' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} style={{
                  display: 'block', padding: '.5rem .9rem',
                  fontSize: '.875rem', fontWeight: 500, color: 'var(--muted)',
                  borderRadius: '7px', transition: 'color .2s, background .2s',
                }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ACTIONS DESKTOP */}
          <div className="nav-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <button
              onClick={openDrawer}
              className="btn btn-ghost"
            >
              Contacto
            </button>
            <button className="btn btn-primary" onClick={openWA}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
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
            { href: '/',          label: 'Inicio' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/nosotros',  label: 'Nosotros' },
            { href: '/proyectos', label: 'Proyectos' },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '.7rem 1rem', fontWeight: 500, color: 'var(--ink2)',
                borderRadius: '8px', transition: 'background .2s', display: 'block',
              }}>
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => { openDrawer(); setMenuOpen(false) }}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start', padding: '.7rem 1rem' }}
          >
            Contacto
          </button>
          <button className="btn btn-primary" onClick={openWA} style={{ marginTop: '.5rem', justifyContent: 'center' }}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      )}

      <style>{`
        .nav-links-desktop { display: flex !important; }
        .nav-actions-desktop { display: flex !important; }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          cursor: pointer;
        }
        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--ink);
          border-radius: 2px;
          transition: .3s;
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
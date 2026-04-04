'use client'

export default function WhatsAppBtn() {
  const openWA = () => {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ACLSYS.')
    window.open(`https://wa.me/529871039604?text=${msg}`, '_blank')
  }

  return (
    <>
      <button id="wa-btn" onClick={openWA}>
        <i className="fab fa-whatsapp"></i>
        <span className="wa-tip">Escríbenos por WhatsApp</span>
      </button>

      <style>{`
        #wa-btn {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37,211,102,.4);
          transition: transform .25s, box-shadow .25s;
          animation: wabounce 3s ease-in-out infinite;
        }
        #wa-btn:hover {
          transform: scale(1.1) !important;
          animation: none;
          box-shadow: 0 6px 24px rgba(37,211,102,.6);
        }
        #wa-btn i {
          font-size: 1.6rem;
          color: #fff;
        }
        .wa-tip {
          position: absolute;
          right: 64px;
          background: var(--navy);
          color: #fff;
          font-family: inherit;
          font-size: .78rem;
          font-weight: 600;
          white-space: nowrap;
          padding: .4rem .85rem;
          border-radius: 7px;
          opacity: 0;
          pointer-events: none;
          transition: opacity .2s;
        }
        #wa-btn:hover .wa-tip { opacity: 1; }
        @keyframes wabounce {
          0%,100% { transform: translateY(0) }
          50%      { transform: translateY(-5px) }
        }
      `}</style>
    </>
  )
}
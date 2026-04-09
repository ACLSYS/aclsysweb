import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios IT | Infraestructura, Redes, Desarrollo y Soporte — ACLSYS',
  description: 'Ciberseguridad, redes Wi-Fi, Cloud, servidores, CCTV, desarrollo web, apps móviles y soporte técnico para empresas de la Riviera Maya y la Península de Yucatán.',
  keywords: 'servicios IT Riviera Maya, ciberseguridad Playa del Carmen, redes empresariales Cancún, desarrollo web Quintana Roo, soporte técnico Riviera Maya, Cloud Solutions Yucatán, CCTV empresas Quintana Roo',
  openGraph: {
    title: 'Servicios IT Empresariales — ACLSYS | Riviera Maya',
    description: 'Infraestructura IT, desarrollo de software y soporte técnico para empresas de la Península de Yucatán. Un solo proveedor para toda tu tecnología.',
    url: 'https://aclsys.net/servicios',
    siteName: 'ACLSYS',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: { canonical: 'https://aclsys.net/servicios' },
}

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACLSYS | Una sola empresa para toda tu tecnología',
  description: 'Infraestructura IT, soporte técnico, desarrollo de software y productos propios para empresas de la Península de Yucatán.',
  keywords: 'IT, infraestructura, redes, cámaras, Ubiquiti, MikroTik, desarrollo web, Riviera Maya, Península de Yucatán',
  openGraph: {
    title: 'ACLSYS | Una sola empresa para toda tu tecnología',
    description: 'Infraestructura IT, soporte técnico y desarrollo de software para la Península de Yucatán.',
    url: 'https://aclsys.net',
    siteName: 'ACLSYS',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
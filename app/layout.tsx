import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta',
})

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
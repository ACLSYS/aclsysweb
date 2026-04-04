import type { Metadata } from 'next'
import './globals.css'
import { DrawerProvider } from '@/context/DrawerContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import ContactDrawer from '@/components/ContactDrawer'

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <DrawerProvider>
          <Navbar />
          <main style={{ paddingTop: '68px' }}>
            {children}
          </main>
          <Footer />
          <ContactDrawer />
          <WhatsAppBtn />
        </DrawerProvider>
      </body>
    </html>
  )
}
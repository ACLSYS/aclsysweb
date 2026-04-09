import type { Metadata } from 'next'
import './globals.css'
import { DrawerProvider } from '@/context/DrawerContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn'
import ContactDrawer from '@/components/ContactDrawer'

export const metadata: Metadata = {
  title: 'ACLSYS | Una sola empresa para toda tu tecnología',
  description: 'Consultoría IT, infraestructura tecnológica, desarrollo de software y soporte técnico para empresas de la Riviera Maya y la Península de Yucatán. Ubiquiti, MikroTik, Cloud, CCTV y más.',
  keywords: 'IT Riviera Maya, infraestructura tecnológica Quintana Roo, desarrollo web Riviera Maya, soporte técnico Playa del Carmen, redes empresariales Cancún, ciberseguridad Yucatán, ACLSYS, consultoría IT México',
  authors: [{ name: 'ACLSYS', url: 'https://aclsys.net' }],
  creator: 'ACLSYS',
  metadataBase: new URL('https://aclsys.net'),
  openGraph: {
    title: 'ACLSYS | Una sola empresa para toda tu tecnología',
    description: 'Infraestructura IT, desarrollo de software y soporte técnico para empresas de la Riviera Maya y la Península de Yucatán.',
    url: 'https://aclsys.net',
    siteName: 'ACLSYS',
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ACLSYS — Una sola empresa para toda tu tecnología' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACLSYS | Una sola empresa para toda tu tecnología',
    description: 'Infraestructura IT, desarrollo de software y soporte técnico para empresas de la Riviera Maya.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://aclsys.net' },
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | Equipo IT local en la Riviera Maya — ACLSYS',
  description: 'Conoce a ACLSYS, el equipo de tecnología nacido en la Riviera Maya. Misión, visión, valores y nuestra forma de trabajar. Aliado tecnológico integral para empresas de la Península de Yucatán.',
  keywords: 'empresa IT Riviera Maya, consultoría tecnológica Quintana Roo, equipo IT local México, ACLSYS nosotros, tecnología empresarial Playa del Carmen',
  openGraph: {
    title: 'Nosotros — ACLSYS | Equipo IT en la Riviera Maya',
    description: 'Somos el equipo de tecnología que nació en la Riviera Maya para acompañar a las empresas de la región con infraestructura, desarrollo y soporte.',
    url: 'https://aclsys.net/nosotros',
    siteName: 'ACLSYS',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: { canonical: 'https://aclsys.net/nosotros' },
}

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
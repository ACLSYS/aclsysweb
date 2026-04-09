import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos | Casos reales de tecnología — ACLSYS',
  description: 'Proyectos reales de infraestructura IT, desarrollo web y soporte técnico para empresas de la Riviera Maya y la Península de Yucatán. Cozumel Birding Tours, Accesfy y más.',
  keywords: 'proyectos IT Riviera Maya, desarrollo web Quintana Roo, casos de éxito tecnología México, infraestructura empresarial Cancún, ACLSYS proyectos',
  openGraph: {
    title: 'Proyectos — ACLSYS | Casos reales de tecnología',
    description: 'Desde sitios web hasta infraestructura de red. Proyectos entregados para empresas y emprendedores de la Riviera Maya y la Península de Yucatán.',
    url: 'https://aclsys.net/proyectos',
    siteName: 'ACLSYS',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: { canonical: 'https://aclsys.net/proyectos' },
}

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
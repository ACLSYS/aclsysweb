# Brief Técnico — Desarrollo Web

> ACLSYS · Riviera Maya, Quintana Roo, México · v1.0 · 2025 · Confidencial

---

## 01. Resumen del proyecto

| Campo | Detalle |
|-------|---------|
| **Empresa** | ACLSYS |
| **Etapa** | Empresa nueva — inicio de operaciones |
| **Sede** | Riviera Maya, Quintana Roo, México |
| **Mercado objetivo** | Empresas de la Península de Yucatán |
| **Dominio** | aclsys.net |
| **Idioma** | Español (versión inicial) |
| **Versión** | 1.0 — 2025 |

---

## 02. Identidad visual

### Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--white` | `#FFFFFF` | Fondo principal |
| `--blue` | `#29B5E8` | Color primario ACLSYS |
| `--blue-d` | `#1A9FD4` | Primario hover / dark |
| `--ink` | `#0D1117` | Texto principal |
| `--muted` | `#64748B` | Párrafos y textos secundarios |
| `--border` | `#E2E8F0` | Bordes sutiles |
| `--surface` | `#F8F9FB` | Fondos de sección alternos |

### Tipografía

**Plus Jakarta Sans** — Google Fonts

| Peso | Uso |
|------|-----|
| `800` | Títulos hero y secciones principales |
| `700` | Headings secundarios |
| `500` | Labels y navegación |
| `400` | Cuerpo y párrafos |

### Estilo general

- Light mode — fondo blanco puro
- Mucho espacio en blanco
- Cards con sombra suave
- Tipografía editorial bold
- Referencia: snowflake.com

---

## 03. Arquitectura del sitio

### Páginas
```
/              →  Home
/servicios     →  Servicios
/nosotros      →  Nosotros
/proyectos     →  Proyectos
/contacto      →  Contacto
```

### Secciones por página

#### Home
- Navbar fija con blur backdrop
- Hero — tagline + 2 CTAs + stats + badge
- Strip — servicios en una línea
- About — grid 2 columnas
- Servicios preview — 6 cards (3x2)
- Por qué ACLSYS — 4 cards
- Cobertura — mapa + lista de zonas
- CTA band + Footer

#### Servicios
- Page hero
- Bloque A — Infraestructura IT (6 servicios)
- Bloque B — Desarrollo & Software (4 servicios)

#### Nosotros
- Quiénes somos (grid 2 col)
- Misión y Visión (2 cards)
- 6 Valores en grid

#### Proyectos
- 8 sectores industriales (chips)
- 6 tipos de proyectos con cards

#### Contacto
- Sidebar info + bloque WhatsApp
- Formulario con optgroups por categoría

---

## 04. Servicios

### Bloque A — Infraestructura IT

#### 01. Ciberseguridad
> Protección integral para la infraestructura digital de tu empresa.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Ransomware, phishing y accesos no autorizados | Arquitecturas de ciberseguridad en capas (defense-in-depth) |
| Falta de visibilidad sobre la red o endpoints | Firewalls perimetrales, EDR, WAF, MFA, Zero Trust |
| Respuesta reactiva ante incidentes | Servicios administrados, simulacros y capacitación |
| Sin políticas de auditoría o trazabilidad | Consultoría de madurez y cumplimiento normativo |

#### 02. Cloud Solutions
> Migra, escala y controla tu infraestructura desde cualquier lugar.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Limitaciones de crecimiento en infraestructura on-premise | Estrategias de adopción cloud adaptadas a cada empresa |
| Costos operativos desalineados con el uso real | Nubes públicas, privadas o híbridas con foco en seguridad |
| Dificultad para migrar o integrar servicios cloud | Migración, containerización y orquestación con Kubernetes |
| Sin visibilidad de cargas de trabajo distribuidas | Monitoreo, backup cloud y cumplimiento regulatorio |

#### 03. Infraestructura y Servidores
> Plataformas de cómputo de alto rendimiento para aplicaciones críticas.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Procesos lentos o cuellos de botella | Implementación de servidores de alto rendimiento |
| Infraestructura heterogénea difícil de gestionar | Arquitecturas optimizadas con tecnología de próxima generación |
| Escalabilidad limitada | Integración con virtualización, almacenamiento y respaldo |
| Altos costos por baja utilización de recursos | Soporte, monitoreo y evolución tecnológica continua |

#### 04. Redes y Comunicaciones
> Conectividad inteligente, segura y escalable para tu empresa.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Cortes frecuentes o baja disponibilidad de red | Diseño y despliegue de redes corporativas modernas |
| Ancho de banda mal distribuido o insuficiente | LAN administrada, Wi-Fi 6/6E, SD-WAN, VLANs |
| Falta de control y seguridad sobre el tráfico | Control de acceso unificado y segmentación dinámica |
| Complejidad al gestionar sedes o usuarios remotos | Monitoreo proactivo y automatización de políticas de red |

#### 05. Backup y Recuperación de Datos
> Protege lo más valioso de tu empresa: tu información.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Pérdida de datos por ransomware o error humano | Estrategias de respaldo adaptadas al riesgo de cada empresa |
| Tiempos de restauración largos | Respaldos locales, remotos, en nube e inmutables |
| Respaldos desactualizados o no verificados | Aplicación del método 3-2-1-1-0 |
| Falta de políticas de retención y archivado | Automatización de verificación y procesos de recuperación |

#### 06. Virtualización
> Flexibilidad, eficiencia y control en cada entorno IT.

| Problemas que resuelve | Valor que aportamos |
|------------------------|---------------------|
| Infraestructura sobredimensionada o subutilizada | Entornos virtualizados robustos, seguros y escalables |
| Bajo rendimiento por entornos fragmentados | VMware vSphere, Hyper-V, Proxmox, Red Hat Virtualization |
| Alta carga de gestión y mantenimiento manual | Consolidación de servidores, alta disponibilidad y balanceo |
| Dificultad para escalar sin aumentar la complejidad | Eficiencia operativa y continuidad de negocio garantizadas |

### Bloque B — Desarrollo & Software

| # | Servicio | Descripción |
|---|----------|-------------|
| 07 | **Desarrollo Web** | Diseño y desarrollo de sitios y aplicaciones web |
| 08 | **Apps Móviles** | Aplicaciones iOS y Android nativas o híbridas |
| 09 | **Software a Medida** | Soluciones de software personalizadas para cada negocio |
| 10 | **Consultoría IT** | Asesoría estratégica en tecnología e infraestructura |

---

## 05. Stack tecnológico

### Frontend

| Tecnología | Uso |
|------------|-----|
| Next.js 14 (App Router) | Framework principal |
| TypeScript | Lenguaje |
| Tailwind CSS | Estilos |
| shadcn/ui | Componentes |
| Lucide React | Iconos |
| Framer Motion | Animaciones |

### Formulario y email

| Tecnología | Uso |
|------------|-----|
| React Hook Form + Zod | Validación |
| Resend | Envío de emails (3,000/mes gratis) |

### Hosting y deploy

| Concepto | Detalle |
|----------|---------|
| Plataforma | Vercel |
| CDN | Global automático |
| SSL | Automático |
| CI/CD | Push a `main` = deploy automático |

---

## 06. Funcionalidades críticas

### Botón WhatsApp flotante `[CRÍTICO]`
- Posición: `fixed` bottom-right, `z-index: 9999`
- Color: `#25D366` (verde WhatsApp oficial)
- Animación de pulso CSS
- Tooltip hover: "Contáctanos por WhatsApp"
- URL: `wa.me/529871039604?text=Hola, me interesa conocer más sobre los servicios de ACLSYS.`

### Navbar responsive `[CRÍTICO]`
- Sticky top con blur backdrop
- Hamburger en mobile
- Active state por página actual

### Formulario de contacto `[ALTO]`
- Validación con React Hook Form + Zod
- Optgroups por categoría de servicio
- Envío por Resend
- Feedback visual al enviar

### Animaciones `[ALTO]`
- Framer Motion — fade + slide up
- Stagger en grids de cards
- Hover states en todas las cards

### SEO `[MEDIO]`
- Metadata por página
- Open Graph (og:image, og:title)
- Keywords locales Riviera Maya
- sitemap.xml automático Next.js

### Performance `[MEDIO]`
- `next/image` para todas las imágenes
- WebP + lazy loading automático
- Google PageSpeed target: 90+
- LCP objetivo < 2.5 segundos

---

## 07. Responsive

| Dispositivo | Ancho | Layout |
|-------------|-------|--------|
| Mobile | < 640px | 1 columna, hamburger, hero compacto |
| Tablet | 640–1024px | 2 columnas, nav compacta |
| Desktop | > 1024px | Layout completo, 3 columnas |

---

## 08. Copy clave

| Elemento | Texto |
|----------|-------|
| Hero título | "Tecnología que impulsa tu empresa al siguiente nivel" |
| Hero subtítulo | "Consultoría IT, infraestructura y desarrollo de software para empresas de la Riviera Maya." |
| CTA primario | "Ver servicios" |
| CTA secundario | "Hablar con un experto" |
| CTA final | "Solicitar consulta gratuita" |
| WhatsApp mensaje | "Hola, me interesa conocer más sobre los servicios de ACLSYS." |

---

## 09. Costos en producción

| Concepto | Costo |
|----------|-------|
| Dominio aclsys.net | ~$300 MXN / año |
| Hosting (Vercel) | $0 — plan free |
| Email (Resend) | $0 — 3,000 emails/mes |
| SSL | $0 — incluido Vercel |
| **Total inicial** | **~$300 MXN / año** |

---

## 10. Criterios de aceptación

- [ ] Botón WhatsApp funcional en todas las páginas
- [ ] 5 páginas navegables
- [ ] 10 servicios con detalle completo (6 IT + 4 Dev)
- [ ] Fondo blanco, estilo Snowflake, tipografía limpia
- [ ] 100% responsive: mobile, tablet y desktop
- [ ] Formulario de contacto con optgroups funcional
- [ ] Animaciones al scroll en cards y secciones
- [ ] SEO básico: meta, og:image, sitemap.xml
- [ ] PageSpeed ≥ 90 en mobile y desktop
- [ ] Sin errores en consola en producción
- [ ] Código TypeScript comentado y organizado
- [ ] README con instrucciones de deploy

---

*ACLSYS · Riviera Maya, Quintana Roo, México · Brief Técnico v1.0 · Confidencial*

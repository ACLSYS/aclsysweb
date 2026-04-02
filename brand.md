# Manual de Identidad — ACLSYS

> Documento de referencia para el equipo de diseño, desarrollo y comunicación.  
> Versión 1.0 · 2025 · Confidencial

---

## 01. Nombre y concepto

| Campo | Detalle |
|-------|---------|
| **Nombre** | ACLSYS |
| **Pronunciación** | A-C-L-SYS |
| **Tagline** | Innovación Digital para Empresas |
| **Descripción corta** | Consultoría IT e infraestructura tecnológica para empresas de la Riviera Maya |
| **Tono de marca** | Profesional, confiable, moderno, directo |

---

## 02. Logo

### Archivos disponibles

| Archivo | Uso |
|---------|-----|
| `logo.png` | Uso general — fondos claros |
| `logo-dark.png` | Uso en fondos oscuros *(pendiente)* |
| `logo-icon.png` | Solo ícono — favicon y apps *(pendiente)* |
| `favicon.ico` | Navegadores y pestañas |
| `og-image.png` | Open Graph — redes sociales |

### Reglas de uso del logo

✅ Usar sobre fondos blancos o muy claros  
✅ Respetar el espacio de respiro mínimo (equivalente a la altura de la "A")  
✅ Usar la versión dark sobre fondos oscuros  

❌ No distorsionar ni cambiar proporciones  
❌ No cambiar los colores del logo  
❌ No agregar efectos (sombras, brillos, contornos)  
❌ No usar sobre fondos con bajo contraste  
❌ No rotar el logo  

### Tamaños mínimos

| Medio | Tamaño mínimo |
|-------|---------------|
| Digital | 120px de ancho |
| Impresión | 3 cm de ancho |
| Favicon | 32×32px |

---

## 03. Paleta de colores

### Colores principales

| Nombre | Token | Hex | Uso |
|--------|-------|-----|-----|
| Azul ACLSYS | `--blue` | `#29B5E8` | Color primario, CTAs, enlaces activos |
| Azul oscuro | `--blue-d` | `#1A9FD4` | Hover states, variante oscura |
| Azul profundo | `--blue-dk` | `#0F6EA3` | Acentos, bordes activos |

### Colores neutros

| Nombre | Token | Hex | Uso |
|--------|-------|-----|-----|
| Blanco | `--white` | `#FFFFFF` | Fondo principal |
| Surface | `--surface` | `#F8F9FB` | Fondos de sección alternos |
| Borde | `--border` | `#E2E8F0` | Líneas divisoras, bordes de cards |
| Borde 2 | `--border2` | `#CBD5E1` | Bordes con más énfasis |
| Muted | `--muted` | `#64748B` | Textos secundarios, párrafos |
| Ink 2 | `--ink2` | `#1E293B` | Texto general del cuerpo |
| Ink | `--ink` | `#0D1117` | Texto principal, headings |

### Colores de estado

| Estado | Hex | Uso |
|--------|-----|-----|
| Éxito | `#22C55E` | Confirmaciones, formulario enviado |
| Error | `#EF4444` | Errores de validación |
| Advertencia | `#F59E0B` | Alertas y avisos |
| Info | `#29B5E8` | Mensajes informativos |

---

## 04. Tipografía

### Fuente principal

**Plus Jakarta Sans** — [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
```

### Escala tipográfica

| Elemento | Peso | Tamaño | Line Height | Uso |
|----------|------|--------|-------------|-----|
| Hero title | 800 | 3.5rem — 4.5rem | 1.1 | Título principal del hero |
| H1 | 800 | 2.5rem | 1.2 | Títulos de página |
| H2 | 700 | 2rem | 1.25 | Títulos de sección |
| H3 | 700 | 1.5rem | 1.3 | Títulos de cards |
| H4 | 600 | 1.25rem | 1.4 | Subtítulos |
| Body | 400 | 1rem | 1.7 | Párrafos y cuerpo |
| Small | 400 | 0.875rem | 1.6 | Textos secundarios |
| Label | 500 | 0.875rem | 1.5 | Labels, nav, badges |
| Caption | 400 | 0.75rem | 1.5 | Notas al pie, metadatos |

---

## 05. Espaciado y layout

### Sistema de espaciado (base 4px)

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | 4px | Espaciado mínimo entre elementos inline |
| `sm` | 8px | Espaciado entre elementos relacionados |
| `md` | 16px | Padding interno de componentes |
| `lg` | 24px | Separación entre componentes |
| `xl` | 32px | Separación entre secciones pequeñas |
| `2xl` | 48px | Separación entre secciones medianas |
| `3xl` | 64px | Padding de secciones principales |
| `4xl` | 96px | Espaciado entre secciones grandes |

### Border radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 6px | Badges, tags, inputs |
| `--radius` | 10px | Cards, botones, modales |
| `--radius-lg` | 16px | Cards grandes, hero elements |
| `--radius-xl` | 24px | Secciones, contenedores |
| `--radius-full` | 9999px | Pills, avatares |

### Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow` | `0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)` | Cards en reposo |
| `--shadow-h` | `0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1)` | Cards en hover |
| `--shadow-blue` | `0 4px 16px rgba(41,181,232,.3)` | Botones primarios |

---

## 06. Componentes base

### Botones

| Variante | Fondo | Texto | Uso |
|----------|-------|-------|-----|
| Primary | `#29B5E8` | `#FFFFFF` | CTA principal |
| Outline | Transparente | `#29B5E8` | CTA secundario |
| Ghost | Transparente | `#64748B` | Acciones terciarias |
| Dark | `#0D1117` | `#FFFFFF` | CTAs sobre fondo claro |

### Cards

- Fondo: `#FFFFFF`
- Borde: `1px solid #E2E8F0`
- Border radius: `10px`
- Sombra reposo: `--shadow`
- Sombra hover: `--shadow-h`
- Transición: `all 0.2s ease`

### Navbar

- Fondo: `rgba(255,255,255,0.95)`
- Backdrop filter: `blur(12px)`
- Border bottom: `1px solid #E2E8F0`
- Alto: `68px`
- Padding horizontal: `6%`

---

## 07. Tono de comunicación

### Voz de la marca

| Característica | Descripción |
|----------------|-------------|
| **Profesional** | Lenguaje claro, sin jerga innecesaria |
| **Confiable** | Datos concretos, sin exageraciones |
| **Directo** | Oraciones cortas, ideas claras |
| **Local** | Referencia a la Riviera Maya y Península de Yucatán |
| **Orientado al cliente** | Foco en problemas reales y soluciones concretas |

### Frases clave de marca

- "Tecnología que impulsa tu empresa al siguiente nivel"
- "Consultoría IT para empresas que exigen lo mejor"
- "Infraestructura digital completa para negocios modernos"
- "Transformamos tu negocio con tecnología de punta"

### Lo que NO somos

❌ Agresivos o sensacionalistas  
❌ Técnicos en exceso con el cliente final  
❌ Genéricos — siempre contexto local  
❌ Informales en comunicación corporativa  

---

## 08. Aplicaciones de marca

### Sitio web
- Light mode como estándar
- Fondo blanco con secciones en `--surface`
- Azul `#29B5E8` como único color de acento
- Tipografía editorial con mucho espacio en blanco

### Redes sociales *(pendiente)*
- Formato cuadrado 1080×1080px
- Fondo blanco o azul ACLSYS
- Logo siempre visible

### Documentos y presentaciones *(pendiente)*
- Plantilla de propuesta comercial
- Plantilla de presentación corporativa

---

## 09. Checklist de consistencia

Antes de publicar cualquier pieza de comunicación:

- [ ] ¿Se usa Plus Jakarta Sans?
- [ ] ¿El azul usado es `#29B5E8`?
- [ ] ¿El fondo es blanco o `#F8F9FB`?
- [ ] ¿El logo tiene espacio de respiro suficiente?
- [ ] ¿El tono es profesional y directo?
- [ ] ¿Se menciona la Riviera Maya o Península de Yucatán?
- [ ] ¿Los CTAs son claros y directos?

---

*ACLSYS · Manual de Identidad v1.0 · 2025 · Confidencial*

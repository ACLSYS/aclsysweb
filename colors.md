# Paleta de colores — ACLSYS

> Colores extraídos directamente del logo oficial.  
> Versión 1.0 · 2025

---

## Colores del logo

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| **Azul marino** | `#0E2E47` | `rgb(14, 46, 71)` | Letras ACLSYS, headings principales |
| **Azul cyan** | `#1597D3` | `rgb(21, 151, 211)` | Subtítulo, acentos, CTAs |

---

## Paleta completa del sistema

### Primarios

| Nombre | Token | Hex | RGB | Uso |
|--------|-------|-----|-----|-----|
| Cyan ACLSYS | `--blue` | `#1597D3` | `rgb(21, 151, 211)` | Color de marca, botones, links activos |
| Cyan hover | `--blue-d` | `#1180B8` | `rgb(17, 128, 184)` | Hover states |
| Cyan profundo | `--blue-dk` | `#0D6A99` | `rgb(13, 106, 153)` | Acentos fuertes, bordes activos |
| Marino ACLSYS | `--navy` | `#0E2E47` | `rgb(14, 46, 71)` | Headings, navbar dark, footer |
| Marino suave | `--navy-d` | `#0A2236` | `rgb(10, 34, 54)` | Hover en elementos oscuros |

### Neutros

| Nombre | Token | Hex | RGB | Uso |
|--------|-------|-----|-----|-----|
| Blanco | `--white` | `#FFFFFF` | `rgb(255, 255, 255)` | Fondo principal |
| Surface | `--surface` | `#F8F9FB` | `rgb(248, 249, 251)` | Fondos de sección alternos |
| Surface 2 | `--surface2` | `#F1F5F9` | `rgb(241, 245, 249)` | Fondos de cards, inputs |
| Borde suave | `--border` | `#E2E8F0` | `rgb(226, 232, 240)` | Bordes de cards y divisores |
| Borde medio | `--border2` | `#CBD5E1` | `rgb(203, 213, 225)` | Bordes con más énfasis |
| Muted | `--muted` | `#64748B` | `rgb(100, 116, 139)` | Textos secundarios, párrafos |
| Ink | `--ink2` | `#1E293B` | `rgb(30, 41, 59)` | Texto general del cuerpo |
| Ink oscuro | `--ink` | `#0D1117` | `rgb(13, 17, 23)` | Texto principal, headings |

### Estados

| Estado | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Éxito | `#22C55E` | `rgb(34, 197, 94)` | Confirmaciones, formulario enviado |
| Error | `#EF4444` | `rgb(239, 68, 68)` | Errores de validación |
| Advertencia | `#F59E0B` | `rgb(245, 158, 11)` | Alertas y avisos |
| Info | `#1597D3` | `rgb(21, 151, 211)` | Mensajes informativos |

---

## Variables CSS
```css
:root {
  /* === MARCA === */
  --blue:       #1597D3;   /* Cyan ACLSYS — primario */
  --blue-d:     #1180B8;   /* Cyan hover */
  --blue-dk:    #0D6A99;   /* Cyan profundo */
  --navy:       #0E2E47;   /* Marino ACLSYS */
  --navy-d:     #0A2236;   /* Marino hover */

  /* === NEUTROS === */
  --white:      #FFFFFF;
  --surface:    #F8F9FB;
  --surface2:   #F1F5F9;
  --border:     #E2E8F0;
  --border2:    #CBD5E1;
  --muted:      #64748B;
  --ink2:       #1E293B;
  --ink:        #0D1117;

  /* === ESTADOS === */
  --success:    #22C55E;
  --error:      #EF4444;
  --warning:    #F59E0B;
  --info:       #1597D3;

  /* === SOMBRAS === */
  --shadow:     0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06);
  --shadow-h:   0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1);
  --shadow-blue: 0 4px 16px rgba(21,151,211,.3);

  /* === LAYOUT === */
  --radius-sm:  6px;
  --radius:     10px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-full: 9999px;
}
```

---

## Tailwind config
```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1597D3',
          dark:    '#1180B8',
          deeper:  '#0D6A99',
        },
        navy: {
          DEFAULT: '#0E2E47',
          dark:    '#0A2236',
        },
        surface: {
          DEFAULT: '#F8F9FB',
          2:       '#F1F5F9',
        },
        border: {
          DEFAULT: '#E2E8F0',
          2:       '#CBD5E1',
        },
        muted:   '#64748B',
        ink:     '#0D1117',
        ink2:    '#1E293B',
      },
      boxShadow: {
        card:    '0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)',
        'card-h':'0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1)',
        blue:    '0 4px 16px rgba(21,151,211,.3)',
      },
      borderRadius: {
        sm:   '6px',
        DEFAULT: '10px',
        lg:   '16px',
        xl:   '24px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Uso correcto de colores

### Combinaciones aprobadas ✅

| Fondo | Texto | Uso |
|-------|-------|-----|
| `#FFFFFF` | `#0E2E47` | Headings sobre fondo blanco |
| `#FFFFFF` | `#1E293B` | Cuerpo sobre fondo blanco |
| `#1597D3` | `#FFFFFF` | Botón primario |
| `#0E2E47` | `#FFFFFF` | Footer, navbar dark |
| `#F8F9FB` | `#1E293B` | Cards sobre surface |

### Combinaciones prohibidas ❌

| Fondo | Texto | Problema |
|-------|-------|---------|
| `#1597D3` | `#0E2E47` | Bajo contraste |
| `#FFFFFF` | `#64748B` | Solo para texto secundario, nunca headings |
| `#F8F9FB` | `#FFFFFF` | Invisible |

---

## WhatsApp

| Elemento | Hex |
|----------|-----|
| Botón flotante | `#25D366` |
| Hover | `#1FB855` |

---

*ACLSYS · Paleta de colores v1.0 · 2025*

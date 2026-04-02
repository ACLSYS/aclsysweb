# Manual de Identidad — ACLSYS

> Documento de referencia para el equipo de diseño, desarrollo y comunicación.
> Versión 2.0 · 2025 · Confidencial

---

## 01. Nombre y concepto

| Campo               | Detalle                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Nombre**          | ACLSYS                                                                  |
| **Pronunciación**   | A-C-L-SYS                                                               |
| **Lema del logo**   | Infraestructura • Conectividad • Seguridad                              |
| **Tagline web**     | Tecnología que impulsa tu empresa al siguiente nivel                    |
| **Descripción corta** | Consultoría IT, infraestructura tecnológica y desarrollo de software para empresas de la Riviera Maya y la Península de Yucatán |
| **Tono de marca**   | Profesional, confiable, moderno, directo                                |

---

## 02. Logo

### Descripción del logo

El logo de ACLSYS es exclusivamente tipográfico — sin ícono ni símbolo gráfico adicional. Está compuesto por dos elementos:

- **"ACLSYS"** — tipografía sans-serif geométrica, peso extrabold, en azul marino `#0E2E47`
- **"INFRAESTRUCTURA • CONECTIVIDAD • SEGURIDAD"** — tipografía sans-serif, peso medio, todo en mayúsculas con tracking amplio, en cyan `#1597D3`. Los separadores `•` son del mismo color cyan.

### Archivos del logo

| Archivo          | Estado      | Uso                                      |
|------------------|-------------|------------------------------------------|
| `logo.png`       | ✅ Disponible | Uso general — fondos claros              |
| `logo-dark.png`  | ⏳ Pendiente  | Uso en fondos oscuros (navbar / footer)  |
| `logo-icon.png`  | ⏳ Pendiente  | Solo wordmark compacto — favicon y apps  |
| `favicon.ico`    | ⏳ Pendiente  | Navegadores y pestañas                   |
| `og-image.png`   | ⏳ Pendiente  | Open Graph — redes sociales              |

### Reglas de uso del logo

✅ Usar sobre fondos blancos o muy claros (`#FFFFFF`, `#F8F9FB`)
✅ Respetar el espacio de respiro mínimo equivalente a la altura de la "A"
✅ Usar la versión dark (`logo-dark.png`) sobre fondos oscuros como navbar y footer
✅ Escalar siempre de forma proporcional

❌ No distorsionar ni cambiar proporciones
❌ No cambiar los colores del logo
❌ No agregar efectos (sombras, brillos, contornos, outline)
❌ No usar sobre fondos con bajo contraste
❌ No rotar el logo
❌ No separar "ACLSYS" del lema — se usan juntos como unidad

### Tamaños mínimos

| Medio      | Tamaño mínimo |
|------------|---------------|
| Digital    | 160px de ancho |
| Impresión  | 4 cm de ancho  |
| Favicon    | 32×32px        |

---

## 03. Tipografía

> ⚠️ **TIPOGRAFÍA PRINCIPAL — POR CONFIRMAR**
> La fuente definitiva del sitio web está pendiente de decisión.
> Hasta que se confirme, no implementar ninguna fuente en código.

### Fuente actual de referencia (provisional)

**Plus Jakarta Sans** — Google Fonts *(provisional, sujeta a cambio)*

```
<!-- NO implementar hasta confirmar la fuente definitiva -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
```

### Escala tipográfica

*(Los pesos y tamaños se mantienen; solo cambia la familia de fuente al confirmarse)*

| Elemento     | Peso | Tamaño desktop  | Line Height | Uso                              |
|--------------|------|-----------------|-------------|----------------------------------|
| Hero title   | 800  | 3.5rem – 4.5rem | 1.1         | Título principal del hero        |
| H1           | 800  | 2.5rem          | 1.2         | Títulos de página                |
| H2           | 700  | 2rem            | 1.25        | Títulos de sección               |
| H3           | 700  | 1.5rem          | 1.3         | Títulos de cards                 |
| H4           | 600  | 1.25rem         | 1.4         | Subtítulos                       |
| Body         | 400  | 1rem            | 1.7         | Párrafos y cuerpo                |
| Small        | 400  | 0.875rem        | 1.6         | Textos secundarios               |
| Label        | 500  | 0.875rem        | 1.5         | Labels, nav, badges              |
| Caption      | 400  | 0.75rem         | 1.5         | Notas al pie, metadatos          |

---

## 04. Paleta de colores

> Colores extraídos directamente del logo oficial `logofinal.png`.

### Colores de marca

| Nombre          | Token       | Hex       | RGB                  | Uso                                      |
|-----------------|-------------|-----------|----------------------|------------------------------------------|
| Cyan ACLSYS     | `--blue`    | `#1597D3` | `rgb(21, 151, 211)`  | Color primario, CTAs, links activos      |
| Cyan hover      | `--blue-d`  | `#1180B8` | `rgb(17, 128, 184)`  | Hover states                             |
| Cyan profundo   | `--blue-dk` | `#0D6A99` | `rgb(13, 106, 153)`  | Acentos fuertes, bordes activos          |
| Marino ACLSYS   | `--navy`    | `#0E2E47` | `rgb(14, 46, 71)`    | Headings, navbar, footer, texto principal|
| Marino hover    | `--navy-d`  | `#0A2236` | `rgb(10, 34, 54)`    | Hover en elementos oscuros               |

### Colores neutros

| Nombre       | Token        | Hex       | RGB                   | Uso                                    |
|--------------|--------------|-----------|-----------------------|----------------------------------------|
| Blanco       | `--white`    | `#FFFFFF` | `rgb(255, 255, 255)`  | Fondo principal                        |
| Surface      | `--surface`  | `#F8F9FB` | `rgb(248, 249, 251)`  | Fondos de sección alternos             |
| Surface 2    | `--surface2` | `#F1F5F9` | `rgb(241, 245, 249)`  | Fondos de cards, inputs                |
| Borde suave  | `--border`   | `#E2E8F0` | `rgb(226, 232, 240)`  | Bordes de cards y divisores            |
| Borde medio  | `--border2`  | `#CBD5E1` | `rgb(203, 213, 225)`  | Bordes con más énfasis                 |
| Muted        | `--muted`    | `#64748B` | `rgb(100, 116, 139)`  | Textos secundarios, párrafos           |
| Ink cuerpo   | `--ink2`     | `#1E293B` | `rgb(30, 41, 59)`     | Texto general del cuerpo               |
| Ink oscuro   | `--ink`      | `#0D1117` | `rgb(13, 17, 23)`     | Texto principal, headings              |

### Colores de estado

| Estado      | Hex       | RGB                  | Uso                              |
|-------------|-----------|----------------------|----------------------------------|
| Éxito       | `#22C55E` | `rgb(34, 197, 94)`   | Confirmaciones, formulario OK    |
| Error       | `#EF4444` | `rgb(239, 68, 68)`   | Errores de validación            |
| Advertencia | `#F59E0B` | `rgb(245, 158, 11)`  | Alertas y avisos                 |
| Info        | `#1597D3` | `rgb(21, 151, 211)`  | Mensajes informativos            |

### WhatsApp

| Elemento        | Hex       |
|-----------------|-----------|
| Botón flotante  | `#25D366` |
| Hover           | `#1FB855` |

---

## 05. Variables CSS

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
  --shadow:       0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06);
  --shadow-h:     0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1);
  --shadow-blue:  0 4px 16px rgba(21,151,211,.3);

  /* === LAYOUT === */
  --radius-sm:   6px;
  --radius:      10px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;
}
```

---

## 06. Tailwind config

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
        muted:  '#64748B',
        ink:    '#0D1117',
        ink2:   '#1E293B',
      },
      boxShadow: {
        card:    '0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)',
        'card-h':'0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.1)',
        blue:    '0 4px 16px rgba(21,151,211,.3)',
      },
      borderRadius: {
        sm:      '6px',
        DEFAULT: '10px',
        lg:      '16px',
        xl:      '24px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 07. Componentes base

### Botones

| Variante  | Fondo       | Texto     | Border              | Uso                    |
|-----------|-------------|-----------|---------------------|------------------------|
| Primary   | `#1597D3`   | `#FFFFFF` | —                   | CTA principal          |
| Outline   | Transparente| `#1597D3` | `1px solid #1597D3` | CTA secundario         |
| Ghost     | Transparente| `#64748B` | —                   | Acciones terciarias    |
| Dark      | `#0E2E47`   | `#FFFFFF` | —                   | CTAs sobre fondo claro |

### Cards

| Propiedad        | Valor                    |
|------------------|--------------------------|
| Fondo            | `#FFFFFF`                |
| Borde            | `1px solid #E2E8F0`      |
| Border radius    | `10px`                   |
| Sombra reposo    | `var(--shadow)`          |
| Sombra hover     | `var(--shadow-h)`        |
| Transición       | `all 0.2s ease`          |

### Navbar

| Propiedad          | Valor                       |
|--------------------|-----------------------------|
| Fondo              | `rgba(255,255,255,0.95)`    |
| Backdrop filter    | `blur(12px)`                |
| Border bottom      | `1px solid #E2E8F0`         |
| Alto               | `68px`                      |
| Padding horizontal | `6%`                        |
| Logo en navbar     | `logo.png` — versión clara  |

### Botón WhatsApp flotante

| Propiedad   | Valor                                    |
|-------------|------------------------------------------|
| Posición    | `fixed` bottom-right, `z-index: 9999`   |
| Color       | `#25D366`                               |
| Hover       | `#1FB855`                               |
| Animación   | Pulso CSS                               |
| Tooltip     | "Contáctanos por WhatsApp"              |
| URL         | `wa.me/529871039604?text=Hola, me interesa conocer más sobre los servicios de ACLSYS.` |

---

## 08. Combinaciones de color aprobadas

### ✅ Aprobadas

| Fondo       | Texto     | Uso                             |
|-------------|-----------|---------------------------------|
| `#FFFFFF`   | `#0E2E47` | Headings sobre fondo blanco     |
| `#FFFFFF`   | `#1E293B` | Cuerpo sobre fondo blanco       |
| `#1597D3`   | `#FFFFFF` | Botón primario                  |
| `#0E2E47`   | `#FFFFFF` | Footer, navbar dark             |
| `#F8F9FB`   | `#1E293B` | Cards sobre surface             |

### ❌ Prohibidas

| Fondo       | Texto     | Problema                                       |
|-------------|-----------|------------------------------------------------|
| `#1597D3`   | `#0E2E47` | Bajo contraste                                 |
| `#FFFFFF`   | `#64748B` | Solo para texto secundario, nunca headings     |
| `#F8F9FB`   | `#FFFFFF` | Invisible                                      |

---

## 09. Espaciado y layout

### Sistema de espaciado (base 4px)

| Token | Valor | Uso                                    |
|-------|-------|----------------------------------------|
| `xs`  | 4px   | Espaciado mínimo entre elementos inline|
| `sm`  | 8px   | Espaciado entre elementos relacionados |
| `md`  | 16px  | Padding interno de componentes         |
| `lg`  | 24px  | Separación entre componentes           |
| `xl`  | 32px  | Separación entre secciones pequeñas    |
| `2xl` | 48px  | Separación entre secciones medianas    |
| `3xl` | 64px  | Padding de secciones principales       |
| `4xl` | 96px  | Espaciado entre secciones grandes      |

### Responsive

| Dispositivo | Ancho      | Layout                                      |
|-------------|------------|---------------------------------------------|
| Mobile      | < 640px    | 1 columna, hamburger, hero compacto         |
| Tablet      | 640–1024px | 2 columnas, nav compacta                    |
| Desktop     | > 1024px   | Layout completo, hasta 3 columnas           |

---

## 10. Tono de comunicación

### Voz de la marca

| Característica          | Descripción                                          |
|-------------------------|------------------------------------------------------|
| **Profesional**         | Lenguaje claro, sin jerga innecesaria                |
| **Confiable**           | Datos concretos, sin exageraciones                   |
| **Directo**             | Oraciones cortas, ideas claras                       |
| **Local**               | Referencia a la Riviera Maya y Península de Yucatán  |
| **Orientado al cliente**| Foco en problemas reales y soluciones concretas      |

### Frases clave

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

## 11. Pendientes

| Elemento              | Estado      | Notas                                          |
|-----------------------|-------------|------------------------------------------------|
| Tipografía definitiva | ⏳ Pendiente | Se actualizará en v2.1 al confirmarse la fuente|
| `logo-dark.png`       | ⏳ Pendiente | Letras blancas para navbar/footer oscuro       |
| `logo-icon.png`       | ⏳ Pendiente | Wordmark compacto para favicon y apps          |
| `favicon.ico`         | ⏳ Pendiente | Derivado de logo-icon                          |
| `og-image.png`        | ⏳ Pendiente | 1200×630px para Open Graph                     |
| Redes sociales        | ⏳ Pendiente | Plantilla cuadrada 1080×1080px                 |
| Presentación corporativa | ⏳ Pendiente | Plantilla de propuesta comercial             |

---

*ACLSYS · Manual de Identidad v2.0 · 2025 · Confidencial*

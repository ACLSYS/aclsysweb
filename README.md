# ACLSYS — Sitio Web Corporativo

> Consultoría IT, infraestructura tecnológica y desarrollo de software para empresas de la Riviera Maya y la Península de Yucatán.

---

## Descripción

Sitio web corporativo de **ACLSYS** desarrollado con Next.js 14, TypeScript y Tailwind CSS. Diseño profesional estilo light mode inspirado en snowflake.com.

---

## Stack tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Iconos:** Lucide React
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Email:** Resend
- **Deploy:** Vercel
- **Dominio:** aclsys.net

---

## Estructura del proyecto
```
aclsysweb/
├── docs/                   # Documentación del proyecto
│   ├── BRIEF.md
│   └── ARCHITECTURE.md
├── brand/                  # Manual de identidad
│   ├── brand.md
│   ├── colors.md
│   ├── typography.md
│   └── logo.png
├── src/
│   ├── app/                # Páginas (App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── servicios/
│   │   ├── nosotros/
│   │   ├── proyectos/
│   │   └── contacto/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppBtn.tsx
│   │   ├── home/
│   │   ├── servicios/
│   │   └── ui/
│   ├── lib/                # Utilidades y data
│   │   ├── services.ts
│   │   └── utils.ts
│   └── styles/
├── public/                 # Assets estáticos
│   ├── logo.png
│   ├── og-image.png
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── .gitignore
```

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home — Hero, servicios preview, por qué ACLSYS, cobertura |
| `/servicios` | Catálogo completo de servicios IT y desarrollo |
| `/nosotros` | Quiénes somos, misión, visión y valores |
| `/proyectos` | Sectores y tipos de proyectos |
| `/contacto` | Formulario de contacto + WhatsApp |

---

## Inicio rápido
```bash
# Clonar el repositorio
git clone https://github.com/ACLSYS/aclsysweb.git
cd aclsysweb

# Instalar dependencias
npm install

# Variables de entorno
cp .env.example .env.local

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Variables de entorno
```env
RESEND_API_KEY=tu_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=529871039604
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola, me interesa conocer más sobre los servicios de ACLSYS.
```

---

## Deploy

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.
```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

---

## Equipo

| Rol | Responsabilidad |
|-----|----------------|
| CTO | Arquitectura y decisiones técnicas |
| Developer | Desarrollo frontend y backend |
| Diseño | UI/UX e identidad visual |

---

## Licencia

Privado — © 2025 ACLSYS. Todos los derechos reservados.

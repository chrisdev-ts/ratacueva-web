# Guía para contribuir en interfaces – RataCueva

> **Resumen rápido:**
>
> - Respeta siempre los mockups y textos de Figma.
> - Usa los layouts y templates ya definidos, no inventes nuevos.
> - Utiliza los componentes de tipografía y las clases de Tailwind existentes.
> - Si el componente es general, ponlo en la carpeta global; si es muy específico de una feature, ponlo en la atomic design de esa feature.
> - No uses estilos en línea ni valores hex/rgb directos.
> - Haz commits pequeños y claros.
> - Si tienes dudas, pregunta antes de improvisar.

Lee el resto de la guía solo si necesitas detalles o ejemplos.

---

## Índice

- [Guía para contribuir en interfaces – RataCueva](#guía-para-contribuir-en-interfaces--ratacueva)
  - [Índice](#índice)
  - [1. Respeta los mockups y Figma](#1-respeta-los-mockups-y-figma)
  - [2. Estructura y ubicación de componentes](#2-estructura-y-ubicación-de-componentes)
  - [2.1 Uso de `hook`, `lib` y `services`](#21-uso-de-hook-lib-y-services)
    - [`src/hook/`](#srchook)
    - [`src/lib/`](#srclib)
    - [`src/services/`](#srcservices)
    - [📌 Recomendaciones al importar](#-recomendaciones-al-importar)
  - [3. Cómo crear nuevas páginas y cómo funcionan las rutas](#3-cómo-crear-nuevas-páginas-y-cómo-funcionan-las-rutas)
  - [3. Uso de layouts](#3-uso-de-layouts)
  - [4. Tipografía y textos](#4-tipografía-y-textos)
  - [5. Colores y estilos](#5-colores-y-estilos)
  - [6. Paddings, margins y espaciados](#6-paddings-margins-y-espaciados)
  - [7. Componentes reutilizables](#7-componentes-reutilizables)
  - [8. Buenas prácticas y reglas de código](#8-buenas-prácticas-y-reglas-de-código)

---

## 1. Respeta los mockups y Figma

- **Referencia obligatoria:** [Figma RataCueva](https://www.figma.com/design/HMPpGPwTe6KYfdL6xDVhSf/RataCueva-Design?node-id=272-813&t=E9DJTC9UvD2rMYOi-1)
- **No inventes:** El diseño, textos, colores, iconos y espaciados deben coincidir con Figma.
- Si tienes dudas, pregunta antes de improvisar.

## 2. Estructura y ubicación de componentes

- **Átomo:** Elementos básicos y reutilizables globalmente (botón, input, tipografía): `src/components/atoms/`
- **Molécula:** Combinación de átomos reutilizables: `src/components/molecules/`
- **Organismo:** Bloques grandes y globales (Header, Footer, Sidebar): `src/components/organisms/`
- **Templates:** Estructuras de página o secciones: `src/components/templates/`
- **Features:** Funcionalidad específica por dominio (dashboard, products, privacy-policy): `src/components/features/<dominio>/`
  - **Dentro de cada feature** debes replicar la estructura atomic design (`atoms/`, `molecules/`, `organisms/`, `templates/`), pero solo para componentes muy específicos que solo se usen en esa sección. Si el componente puede ser útil en otras partes del proyecto, debe ir en la estructura general de `src/components/`.
- **¿Nuevo componente?** Ubícalo donde corresponda. Si no encaja, consulta al equipo.


## 2.1 Uso de `hook`, `lib` y `services`

Para mantener una arquitectura clara y sostenible, la lógica de negocio, funciones utilitarias y comunicación con APIs debe organizarse fuera de los componentes visuales, usando estas carpetas en `src/`:

### `src/hook/`

Contiene **custom hooks** para encapsular lógica reactiva (fetch, manejo de estado, debounce, etc.) separada de los componentes de UI.  
Se organiza por dominio cuando aplica:  
Ejemplos:
- `src/hook/useProducts.ts`
- `src/hook/dashboard/useEmployees.ts`

> ✅ Usa esta carpeta cuando necesites reutilizar lógica con `useState`, `useEffect`, React Query, etc.

---

### `src/lib/`

Contiene **funciones utilitarias, configuración de librerías y datos simulados**, no dependientes de React.
Ejemplos:
- `src/lib/utils.ts`: Funciones genéricas (formateo, validaciones, etc.)
- `src/lib/react-query-client.ts`: Configuración global de React Query
- `src/lib/featuredProducts.ts`: Datos simulados para desarrollo

> ✅ Ideal para helpers, configuraciones o datos temporales.

---

### `src/services/`

Contiene **funciones para acceder a datos externos**, como APIs REST o servicios internos.
También se organiza por dominio para mantener claridad.
Ejemplos:
- `src/services/auth/login.ts`
- `src/services/home/products/index.tsx`

> ✅ Toda la lógica de acceso a datos (fetch, axios, etc.) debe vivir aquí.

---

### 📌 Recomendaciones al importar

Al trabajar con componentes, importa la lógica desde estas carpetas para mantener una separación clara entre la presentación y la lógica:

```tsx
import { useProducts } from '@/hook/home/useProducts';
import { fetchHomeProducts } from '@/services/home/products';
import { formatCurrency } from '@/lib/utils';
```

---

**Importante:** Estas carpetas ya existen dentro de `src/` y **no deben duplicarse dentro de `src/app/` ni de ninguna feature**. Centralizamos su uso para evitar confusión y duplicidad.

## 3. Cómo crear nuevas páginas y cómo funcionan las rutas

- El proyecto usa el sistema de rutas basado en el filesystem de Next.js (app router).
- Cada carpeta dentro de `src/app/` representa una ruta. Por ejemplo, `src/app/shop/home/page.tsx` será accesible en `/shop/home`.
- Para crear una nueva página, crea una carpeta con el nombre de la ruta y dentro un archivo `page.tsx`.
- Si necesitas rutas dinámicas, usa corchetes: `src/app/shop/products/[id]/page.tsx` será `/shop/products/123`.
- Los layouts (`layout.tsx`) y templates se pueden anidar para compartir estructura y estilos entre páginas.
- No modifiques rutas existentes sin consultar, para evitar romper navegación o enlaces.

## 3. Uso de layouts

- **Siempre usa el layout adecuado:**
  - Dashboard: **usando siempre** [`DashboardContentLayout`] desde `components/features/dashboard/templates/`.
  - Shop: **usando siempre** [`PageLayout`] desde `src/components/templates/` como contenedor principal y dentro de este [`ContentLayout`] desde `src/components/templates/` para el contenido de cada página. Así aseguras consistencia de paddings, anchos y espaciados.
- **No dupliques layouts.** Extiende los existentes.

## 4. Tipografía y textos

- **Usa SIEMPRE los componentes de tipografía:**
  - `Display`, `Heading`, `Subheading`, `Body`, `BodySmall`, `Caption` desde `src/components/atoms/Typography/`
- **No uses `<h1>`, `<p>`, etc.** directamente, salvo casos muy justificados.
- **Textos:** Copia y pega desde Figma. No inventes ni cambies redacción.

## 5. Colores y estilos

- **Colores:** Usa las clases de Tailwind ya definidas (`bg-primary`, `text-accent`, etc.).
- **No uses valores hex ni rgb directos.**
- **Variables:** Si necesitas un color nuevo, consulta antes de agregarlo.
- **Estilos globales:** Todos los estilos base y utilidades personalizadas están en `src/app/globals.css`. Desde Tailwind v4 no existe archivo de configuración `tailwind.config.js`.

## 6. Paddings, margins y espaciados

- **Respeta los valores de Figma.**
- Usa las utilidades de Tailwind (`px-4`, `py-8`, `gap-6`, etc.).
- **No uses estilos en línea** salvo casos muy justificados.
- Los templates como `PageLayout` y `ContentLayout` ya manejan la mayoría de los espaciados globales.

## 7. Componentes reutilizables

- **Antes de crear un componente, revisa si ya existe.**
- Si creas uno nuevo, hazlo reutilizable y documenta sus props.
- **Ejemplo:** Un botón debe ir en `atoms/Button.tsx`.

## 8. Buenas prácticas y reglas de código

- **No modifiques el diseño sin aprobación.**
- **No mezcles lógica de negocio con UI.**
- **Nombra los archivos y componentes en inglés y en PascalCase.**
- **Sigue la convención de carpetas y atomic design.**
- **Haz commits pequeños y descriptivos.**

---

**¡Gracias por mantener la calidad y coherencia visual de RataCueva!**

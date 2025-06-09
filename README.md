# CIIS Expositores

Aplicación web para gestionar expositores del CIIS, desarrollada con React + Vite + Express + Node + TypeScript.

## Estructura del Proyecto

```
ciis-expositores/
├── frontend/     # Aplicación React + Vite
└── backend/      # Servidor Express + Node
```

## Registro de Cambios

### [2024-03-19] Inicialización del Proyecto
- Se creó la carpeta raíz del proyecto `ciis-expositores`
- Se creó este archivo README.md con la documentación inicial

### [2024-03-19] Implementación del Backend
- Se creó la carpeta `backend` y se inicializó el proyecto Node.js
- Se instalaron las dependencias necesarias:
  - express
  - cors
  - ts-node-dev
  - @types/node
  - @types/express
  - @types/cors
  - typescript

#### Archivos creados y modificados:

1. `backend/tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

2. `backend/src/types.ts`:
```typescript
export interface Expositor {
  id: string;
  nombre: string;
  afiliacion: string;
  pais?: string;
  url: string;
}
```

3. `backend/src/index.ts`:
- Se implementó el servidor Express con los siguientes endpoints:
  - GET /expositores: Retorna la lista de expositores
  - POST /expositores: Agrega un nuevo expositor
  - PUT /expositores: Actualiza un expositor existente
- Se agregó almacenamiento en memoria con 5 expositores de ejemplo
- Se configuró CORS y middleware para JSON

4. `backend/package.json`:
- Se modificó para incluir los scripts:
  - "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  - "build": "tsc"
  - "start": "node dist/index.js"
- Se actualizaron las dependencias y sus versiones

### [2024-03-19] Implementación del Frontend
- Se creó el proyecto frontend usando Vite con la plantilla React + TypeScript
- Se eliminó el código de ejemplo generado por Vite

#### Archivos creados y modificados:

1. `frontend/src/types.ts`:
```typescript
export interface Expositor {
  id: string;
  nombre: string;
  afiliacion: string;
  pais?: string;
  url: string;
}
```

2. `frontend/src/App.tsx`:
- Se eliminó todo el código de ejemplo de Vite
- Se implementó el componente principal con:
  - Estado para la lista de expositores
  - Estado para el formulario de nuevo expositor
  - Estado para el expositor en edición
  - Función fetchExpositores para obtener datos del backend
  - Función handleSubmitNuevo para agregar expositores
  - Función handleSubmitEditar para actualizar expositores
  - JSX con formularios y lista de expositores

3. `frontend/src/App.css`:
- Se eliminaron los estilos por defecto de Vite
- Se agregaron nuevos estilos para:
  - Layout responsive con grid
  - Formularios con diseño moderno
  - Tarjetas de expositores con sombras y bordes redondeados
  - Botones con efectos hover
  - Imágenes con object-fit para mantener proporciones
  - Espaciado y tipografía consistentes 
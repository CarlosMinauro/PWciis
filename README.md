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

Comandos utilizados:
```bash
mkdir ciis-expositores
```

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

Comandos utilizados:
```bash
cd ciis-expositores
mkdir backend
cd backend
npm init -y
npm install express cors ts-node-dev @types/node @types/express @types/cors typescript
mkdir src
```

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
- Se modificó el archivo generado por `npm init -y`:
  - Se eliminó el script de test por defecto
  - Se agregaron los scripts:
    ```json
    "scripts": {
      "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
      "build": "tsc",
      "start": "node dist/index.js"
    }
    ```
  - Se actualizaron las dependencias y sus versiones específicas:
    ```json
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.18.2"
    },
    "devDependencies": {
      "@types/cors": "^2.8.17",
      "@types/express": "^4.17.21",
      "@types/node": "^20.11.19",
      "ts-node-dev": "^2.0.0",
      "typescript": "^5.3.3"
    }
    ```

### [2024-03-19] Implementación del Frontend
- Se creó el proyecto frontend usando Vite con la plantilla React + TypeScript
- Se eliminó el código de ejemplo generado por Vite

Comandos utilizados:
```bash
cd ..
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
```

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
- Se eliminó todo el código de ejemplo de Vite, incluyendo:
  - Los imports de los logos (reactLogo y viteLogo)
  - El contador de ejemplo
  - Los enlaces a la documentación
  - Los estilos por defecto
- Se implementó el componente principal con:
  - Estado para la lista de expositores:
    ```typescript
    const [expositores, setExpositores] = useState<Expositor[]>([])
    ```
  - Estado para el formulario de nuevo expositor:
    ```typescript
    const [nuevoExpositor, setNuevoExpositor] = useState<Expositor>({
      id: '',
      nombre: '',
      afiliacion: '',
      url: ''
    })
    ```
  - Estado para el expositor en edición:
    ```typescript
    const [expositorEditando, setExpositorEditando] = useState<Expositor | null>(null)
    ```
  - Función fetchExpositores para obtener datos del backend
  - Función handleSubmitNuevo para agregar expositores
  - Función handleSubmitEditar para actualizar expositores
  - JSX con formularios y lista de expositores

3. `frontend/src/App.css`:
- Se eliminaron todos los estilos por defecto de Vite, incluyendo:
  - Los estilos de los logos
  - Los estilos del contador
  - Los estilos de la documentación
- Se agregaron nuevos estilos para:
  - Layout responsive con grid:
    ```css
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    ```
  - Formularios con diseño moderno:
    ```css
    .form-section {
      background: #f5f5f5;
      padding: 1.5rem;
      border-radius: 8px;
    }
    ```
  - Tarjetas de expositores con sombras y bordes redondeados:
    ```css
    .expositor-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    ```
  - Botones con efectos hover:
    ```css
    button {
      background: #646cff;
      transition: background-color 0.2s;
    }
    button:hover {
      background: #535bf2;
    }
    ```
  - Imágenes con object-fit para mantener proporciones:
    ```css
    .expositor-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    ```
  - Espaciado y tipografía consistentes

### [2024-03-19] Configuración de Git y Push al Repositorio
- Se inicializó el repositorio Git
- Se creó el archivo .gitignore
- Se realizó el commit inicial
- Se configuró el repositorio remoto
- Se subió el código a GitHub

Comandos utilizados:
```bash
# Inicializar repositorio Git
git init

# Crear y configurar .gitignore
# (contenido del archivo .gitignore)

# Agregar archivos y hacer commit inicial
git add .
git commit -m "Commit inicial: Implementación de la aplicación CIIS Expositores"

# Configurar repositorio remoto y hacer push
git remote add origin https://github.com/CarlosMinauro/PWciis.git
git branch -M main
git push -u origin main

# Actualizar README con cambios específicos
git add README.md
git commit -m "docs: Actualización detallada del README con cambios específicos"
git push origin main
``` 
import express from 'express';
import cors from 'cors';
import { Expositor } from './types';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for expositores
let expositores: Expositor[] = [
  {
    id: '1',
    nombre: 'Dr. Juan Pérez',
    afiliacion: 'Universidad Nacional',
    pais: '🇲🇽',
    url: 'https://example.com/juan.jpg'
  },
  {
    id: '2',
    nombre: 'Dra. María García',
    afiliacion: 'Instituto Tecnológico',
    pais: '🇪🇸',
    url: 'https://example.com/maria.jpg'
  },
  {
    id: '3',
    nombre: 'Dr. Carlos López',
    afiliacion: 'Universidad de Chile',
    pais: '🇨🇱',
    url: 'https://example.com/carlos.jpg'
  },
  {
    id: '4',
    nombre: 'Dra. Ana Martínez',
    afiliacion: 'Universidad de Buenos Aires',
    pais: '🇦🇷',
    url: 'https://example.com/ana.jpg'
  },
  {
    id: '5',
    nombre: 'Dr. Roberto Silva',
    afiliacion: 'Universidad de São Paulo',
    pais: '🇧🇷',
    url: 'https://example.com/roberto.jpg'
  }
];

// GET /expositores
app.get('/expositores', (req, res) => {
  res.json(expositores);
});

// POST /expositores
app.post('/expositores', (req, res) => {
  const nuevoExpositor: Expositor = req.body;
  
  if (expositores.some(e => e.id === nuevoExpositor.id)) {
    return res.status(400).json({ error: 'El ID ya existe' });
  }

  expositores.push(nuevoExpositor);
  res.status(201).json(nuevoExpositor);
});

// PUT /expositores
app.put('/expositores', (req, res) => {
  const expositorActualizado: Expositor = req.body;
  const index = expositores.findIndex(e => e.id === expositorActualizado.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Expositor no encontrado' });
  }

  expositores[index] = expositorActualizado;
  res.json(expositorActualizado);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); 
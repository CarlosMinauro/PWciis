import { useState, useEffect } from 'react'
import type { Expositor } from './types'
import './App.css'

function App() {
  const [expositores, setExpositores] = useState<Expositor[]>([])
  const [nuevoExpositor, setNuevoExpositor] = useState<Expositor>({
    id: '',
    nombre: '',
    afiliacion: '',
    url: ''
  })
  const [expositorEditando, setExpositorEditando] = useState<Expositor | null>(null)

  useEffect(() => {
    fetchExpositores()
  }, [])

  const fetchExpositores = async () => {
    try {
      const response = await fetch('http://localhost:3000/expositores')
      const data = await response.json()
      setExpositores(data)
    } catch (error) {
      console.error('Error al obtener expositores:', error)
    }
  }

  const handleSubmitNuevo = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/expositores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoExpositor),
      })
      if (response.ok) {
        setNuevoExpositor({ id: '', nombre: '', afiliacion: '', url: '' })
        fetchExpositores()
      }
    } catch (error) {
      console.error('Error al agregar expositor:', error)
    }
  }

  const handleSubmitEditar = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!expositorEditando) return

    try {
      const response = await fetch('http://localhost:3000/expositores', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expositorEditando),
      })
      if (response.ok) {
        setExpositorEditando(null)
        fetchExpositores()
      }
    } catch (error) {
      console.error('Error al actualizar expositor:', error)
    }
  }

  return (
    <div className="container">
      <h1>Expositores CIIS</h1>

      <div className="forms-container">
        <div className="form-section">
          <h2>Agregar Nuevo Expositor</h2>
          <form onSubmit={handleSubmitNuevo}>
            <input
              type="text"
              placeholder="ID"
              value={nuevoExpositor.id}
              onChange={(e) => setNuevoExpositor({ ...nuevoExpositor, id: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Nombre"
              value={nuevoExpositor.nombre}
              onChange={(e) => setNuevoExpositor({ ...nuevoExpositor, nombre: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Afiliación"
              value={nuevoExpositor.afiliacion}
              onChange={(e) => setNuevoExpositor({ ...nuevoExpositor, afiliacion: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="URL de imagen"
              value={nuevoExpositor.url}
              onChange={(e) => setNuevoExpositor({ ...nuevoExpositor, url: e.target.value })}
              required
            />
            <button type="submit">Agregar</button>
          </form>
        </div>

        {expositorEditando && (
          <div className="form-section">
            <h2>Editar Expositor</h2>
            <form onSubmit={handleSubmitEditar}>
              <input
                type="text"
                placeholder="Nombre"
                value={expositorEditando.nombre}
                onChange={(e) => setExpositorEditando({ ...expositorEditando, nombre: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Afiliación"
                value={expositorEditando.afiliacion}
                onChange={(e) => setExpositorEditando({ ...expositorEditando, afiliacion: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="URL de imagen"
                value={expositorEditando.url}
                onChange={(e) => setExpositorEditando({ ...expositorEditando, url: e.target.value })}
                required
              />
              <button type="submit">Actualizar</button>
              <button type="button" onClick={() => setExpositorEditando(null)}>Cancelar</button>
            </form>
          </div>
        )}
      </div>

      <div className="expositores-list">
        <h2>Lista de Expositores</h2>
        {expositores.map((expositor) => (
          <div key={expositor.id} className="expositor-card">
            <img src={expositor.url} alt={expositor.nombre} />
            <div className="expositor-info">
              <h3>{expositor.nombre}</h3>
              <p>{expositor.afiliacion}</p>
              {expositor.pais && <p>{expositor.pais}</p>}
            </div>
            <button onClick={() => setExpositorEditando(expositor)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

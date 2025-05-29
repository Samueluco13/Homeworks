import { useState } from 'react'
import '../styles/GreenZoneForm.css'

function GreenZoneForm({ cityId, onAddGreenZone, onAddSubzone, zones }) {
  const [name, setName] = useState('')
  const [selectedZone, setSelectedZone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      if (selectedZone) {
        onAddSubzone(cityId, selectedZone, name.trim())
      } else {
        onAddGreenZone(cityId, name.trim())
      }
      setName('')
      setSelectedZone('')
    }
  }

  const hasRootZone = zones.length > 0;

  return (
    <form onSubmit={handleSubmit} className="green-zone-form">
      <h3>Agregar Zona Verde</h3>
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={zones.length === 0 ? 'Nombre de la zona principal' : 'Nombre de la subzona'}
          required
        />
        {hasRootZone && (
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            required
          >
            <option value="">Seleccionar zona padre</option>
            {zones.map(function renderOptions(zone, level = 0) {
              return (
                <>
                  <option key={zone.id} value={zone.id}>
                    {'\u2500'.repeat(level)} {zone.name}
                  </option>
                  {zone.subzones.map(subzone => renderOptions(subzone, level + 1))}
                </>
              )
            })}
          </select>
        )}
        <button type="submit">
          {hasRootZone ? 'Crear Nueva Zona' : 'Crear Parque Principal'}
        </button>
      </div>
    </form>
  )
}

export default GreenZoneForm 
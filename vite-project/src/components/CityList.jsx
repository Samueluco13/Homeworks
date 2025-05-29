import '../styles/CityList.css'

function CityList({ cities, onSelectCity, onRemoveCity, selectedCity }) {
  return (
    <div className="city-list">
      <h3>{cities.length === 0 ? null : "Lista de Ciudades"}</h3>
      <div className="cities">
        {cities.map(city => (
          <div key={city.id} className="city-item">
            <div className="city-info">
              <h4>{city.name}</h4>
              <p>Conexiones: {city.adjList.map(c => c.name).join(', ')}</p>
            </div>
            <div className="city-actions">
              <button 
                onClick={() => onSelectCity(city)}
                className={selectedCity?.id === city.id ? 'active' : ''}
              >
                {selectedCity?.id === city.id ? 'Ocultar detalles' : 'Ver detalles'}
              </button>
              <button onClick={() => onRemoveCity(city.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityList 
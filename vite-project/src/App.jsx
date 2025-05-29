import { useState } from 'react'
import './App.css'
import City from './classes/City'
import GreenZone from './classes/GreenZone'
import CityList from './components/CityList'
import CityForm from './components/CityForm'
import GreenZoneForm from './components/GreenZoneForm'
import CityGraph from './components/CityGraph'
import GreenZoneTree from './components/GreenZoneTree'

function App() {
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  const addCity = (name) => {
    const newCity = new City(name)
    //Para conectar la nueva ciudad con todas las existentes
    cities.forEach(existingCity => {
      newCity.addConnection(existingCity)
    })
    setCities([...cities, newCity])
  }

  const removeCity = (cityId) => {
    const cityToRemove = cities.find(city => city.id === cityId)
    if (cityToRemove) {
      cities.forEach(city => {
        city.removeConnection(cityToRemove)
      })
      setCities(cities.filter(city => city.id !== cityId))
      if (selectedCity && selectedCity.id === cityId) {
        setSelectedCity(null)
      }
    }
  }

  const addGreenZone = (cityId, zoneName) => {
    const city = cities.find(c => c.id === cityId)
    if (city) {
      const newZone = new GreenZone(zoneName)
      city.addGreenZone(newZone)
      setCities([...cities])
    }
  }

  const addSubzone = (cityId, parentZoneId, zoneName) => {
    const city = cities.find(c => c.id === cityId)
    if (city) {
      const findZone = (zones, id) => {
        for (let zone of zones) {
          if (zone.id === id) return zone
          const subzone = findZone(zone.subzones, id)
          if (subzone) return subzone
        }
        return null
      }

      const parentZone = findZone(city.greenZones, parentZoneId)
      if (parentZone) {
        const newSubzone = new GreenZone(zoneName)
        parentZone.addSubzone(newSubzone)
        setCities([...cities])
      }
    }
  }

  const toggleCityDetails = (city) => {
    setSelectedCity(selectedCity?.id === city.id ? null : city);
  }

  return (
    <div className="app">
      <h1>Red de Ciudades</h1>
      <div className="main-container">
        <div className="left-section">
          <div className="cities-section">
            <CityForm onAddCity={addCity} />
            <CityList 
              cities={cities}
              onSelectCity={toggleCityDetails}
              onRemoveCity={removeCity}
              selectedCity={selectedCity}
            />
          </div>
          <div className="visualization-section">
            <CityGraph 
              cities={cities}
              onSelectCity={toggleCityDetails}
              onRemoveCity={removeCity}
              selectedCity={selectedCity}
            />
          </div>
        </div>
        {selectedCity && (
          <div className="right-section">
            <div className="green-zones-section">
              <h2>Zonas Verdes de {selectedCity.name}</h2>
              <p>Altura total: {selectedCity.getTotalHeight()} niveles</p>
              <p>Número de zonas verdes: {selectedCity.getGreenZonesCount()}</p>
              <GreenZoneForm 
                cityId={selectedCity.id}
                onAddGreenZone={addGreenZone}
                onAddSubzone={addSubzone}
                zones={selectedCity.greenZones}
              />
            </div>
            <div className="visualization-section">
              <GreenZoneTree 
                zones={selectedCity.greenZones}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

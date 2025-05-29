import { Graph } from "react-d3-graph";
import { useState } from "react";
import ContextMenu from "./ContextMenu";
import '../styles/CityGraph.css'

function CityGraph({ cities, onSelectCity, onRemoveCity, selectedCity }) {
  const [contextMenu, setContextMenu] = useState(null);

  const graphConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "#2a2a2a",
      size: 300,
      highlightStrokeColor: "#646cff",
      fontSize: 16,
      fontColor: "#e0e0e0",
      strokeColor: "#646cff",
      strokeWidth: 2,
    },
    link: {
      color: "#4a4a4a",
      highlightColor: "#646cff",
      strokeWidth: 2,
    },
    d3: {
      gravity: -200,
      linkLength: 200,
      alphaTarget: 0,
    },
    height: 400,
    width: 600,
    backgroundColor: "#2a2a2a",
    events: {
      click: onClickNode,
    },
  };

  const graphData = {
    nodes: cities.map(city => ({
      id: city.name,
      color: selectedCity?.id === city.id ? "#646cff" : "#3a3a3a",
    })),
    links: cities.flatMap(city =>
      city.adjList.map(connection => ({
        source: city.name,
        target: connection.name,
      }))
    ).filter((link, index, self) => 
      index === self.findIndex(l => 
        (l.source === link.source && l.target === link.target) ||
        (l.source === link.target && l.target === link.source)
      )
    ),
  };

  function onClickNode(nodeId, event) {
    event.preventDefault();
    event.stopPropagation();
    const city = cities.find(c => c.name === nodeId);
    if (city) {
      const rect = event.target.getBoundingClientRect();
      setContextMenu({
        x: rect.left,
        y: rect.top,
        city,
      });
    }
  }


  return (
    <div className="city-graph">
      <h3>Visualización de la Red de Ciudades</h3>
      <div className="graph-container">
        <Graph
          id="city-network-graph"
          data={graphData}
          config={graphConfig}
        />
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            city={contextMenu.city}
            onClose={() => setContextMenu(null)}
            onSelectCity={onSelectCity}
            onRemoveCity={onRemoveCity}
            isActive={selectedCity?.id === contextMenu.city.id}
          />
        )}
      </div>
    </div>
  );
}

export default CityGraph; 
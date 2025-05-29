import '../styles/CityContextMenu.css';

function ContextMenu({ x, y, city, onClose, onSelectCity, onRemoveCity, isActive }) {
  const handleClick = (action) => {
    action();
    onClose();
  };

  return (
    <>
      <div className="context-menu-overlay" onClick={onClose} />
      <div 
        className="city-context-menu"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <button
          className={`menu-button ${isActive ? 'active' : ''}`}
          onClick={() => handleClick(() => onSelectCity(city))}
        >
          {isActive ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
        <button
          className="menu-button delete"
          onClick={() => handleClick(() => onRemoveCity(city.id))}
        >
          Eliminar
        </button>
      </div>
    </>
  );
}

export default ContextMenu; 
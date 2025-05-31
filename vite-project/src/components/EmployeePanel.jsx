import '../styles/EmployeePanel.css';

export const EmployeePanel = ({ selectedEmployee, onEdit, onDelete, onClose }) => {
    if (!selectedEmployee) {
        return;
    }

    return (
        <div className="employee-panel">
        <div className="panel-header">
            <h3>Detalles del Empleado</h3>
            <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="panel-content">
            <div className="employee-info">
            <h4>{selectedEmployee.name}</h4>
            <p className="employee-title">{selectedEmployee.title}</p>
            <p className="employee-subordinates">
                Subordinados directos: {selectedEmployee.subordinates || 0}
            </p>
            </div>

            <div className="panel-actions">
            <button 
                className="action-button edit-button"
                onClick={() => onEdit(selectedEmployee)}
            >
                Editar Empleado
            </button>
            <button 
                className="action-button delete-button"
                onClick={() => onDelete(selectedEmployee)}
            >
                Eliminar Empleado
            </button>
            </div>
        </div>
        </div>
    );
}; 
import { useState } from 'react';
import '../styles/EditModal.css';

export const EditModal = ({ employee, onUpdate, onClose }) => {
    const [editedEmployee, setEditedEmployee] = useState({
        id: employee.id,
        name: employee.name,
        title: employee.title
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(editedEmployee);
    };

    return (
        <div className="edit-modal">
        <div className="edit-modal-content">
            <div className="modal-header">
            <h2>Editar Empleado</h2>
            <button className="close-button" onClick={onClose}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="edit-name">Nombre:</label>
                <input
                id="edit-name"
                type="text"
                value={editedEmployee.name}
                onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
                placeholder="Nombre del empleado"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="edit-title">Cargo:</label>
                <input
                id="edit-title"
                type="text"
                value={editedEmployee.title}
                onChange={(e) => setEditedEmployee({ ...editedEmployee, title: e.target.value })}
                placeholder="Cargo del empleado"
                required
                />
            </div>

            <div className="modal-actions">
                <button type="submit" className="save-button">
                Guardar Cambios
                </button>
                <button type="button" className="cancel-button" onClick={onClose}>
                Cancelar
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}; 
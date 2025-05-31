import { useState } from 'react';
import '../styles/EmployeeForm.css';

export const EmployeeForm = ({ onAddEmployee, availableParents }) => {
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        title: '',
        parentId: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newEmployee.name && newEmployee.title && (newEmployee.parentId || availableParents.length === 0)) {
            onAddEmployee(newEmployee);
            setNewEmployee({ name: '', title: '', parentId: '' });
        }
    };

    return (
        <form className="add-employee-form" onSubmit={handleSubmit}>
            <div className="form-section">
                <h3>Información del Empleado</h3>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                    id="name"
                    type="text"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    placeholder="Ingrese el nombre del empleado"
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Cargo:</label>
                    <input
                    id="title"
                    type="text"
                    value={newEmployee.title}
                    onChange={(e) => setNewEmployee({ ...newEmployee, title: e.target.value })}
                    placeholder="Ingrese el cargo del empleado"
                    required
                    />
                </div>
            </div>

            <div className="form-section">
                <h3>Asignación de Supervisor</h3>
                {availableParents.length > 0 ? (
                    <div className="form-group">
                        <label htmlFor="parent">
                            Seleccione el supervisor:
                            <span className="required-mark">*</span>
                        </label>
                        <select
                        id="parent"
                        value={newEmployee.parentId}
                        onChange={(e) => setNewEmployee({ ...newEmployee, parentId: e.target.value })}
                        required
                        >
                            <option value="">-- Seleccionar Supervisor --</option>
                            {availableParents.map(parent => (
                                <option key={parent.id} value={parent.id}>
                                    {parent.name} - {parent.title}
                                </option>
                            ))}
                        </select>
                        <small className="helper-text">
                            El empleado será subordinado del supervisor seleccionado
                        </small>
                    </div>
                ) : (
                    <p className="info-text">
                        Este será el primer empleado (raíz) en la jerarquía
                    </p>
                )}
            </div>

            <button type="submit" className="add-button">
                Agregar Empleado
            </button>
        </form>
    );
};

import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeePanel } from './components/EmployeePanel';
import { EditModal } from './components/EditModal';
import { Tree as EmployeeTree } from './classes/Tree';
import './App.css';

export const App = () => {
  const [tree] = useState(() => new EmployeeTree());
  const [treeData, setTreeData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [contextMenuNodeId, setContextMenuNodeId] = useState(null);

  const handleAddEmployee = (employeeData) => {
    const success = tree.addEmployee(employeeData.name, employeeData.title, employeeData.parentId);
    if (success) {
        setTreeData(tree.toTreeData());
        let newEmployee = null;
        tree.bfs((node) => {
            if (node.name === employeeData.name && node.title === employeeData.title) {
                newEmployee = node;
            }
        });
        
        if (newEmployee) {
            setSelectedEmployee({
                id: newEmployee.id,
                name: newEmployee.name,
                title: newEmployee.title,
                subordinates: tree.getSubordinatesCount(newEmployee.id)
            });
        }
    }
  };
  
  const handleNodeClick = (nodeData) => {
    console.log("Hola mundo");
    const employee = tree.findNode(nodeData.data.id);
    console.log(employee);
    if (employee) {
      setSelectedEmployee({
        id: employee.id,
        name: employee.name,
        title: employee.title,
        subordinates: tree.getSubordinatesCount(employee.id)
      });
    }
  };
  
  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setShowEditModal(true);
  };

  const handleDeleteEmployee = (employee) => {
    if (window.confirm('¿Está seguro de que desea eliminar este empleado?')) {
      tree.deleteEmployee(employee.id);
      setTreeData(tree.toTreeData());
      setSelectedEmployee(null);
    }
  };

  const handleUpdateEmployee = (updatedData) => {
    const success = tree.updateEmployee(updatedData.id, updatedData.name, updatedData.title);
    if (success) {
      setTreeData(tree.toTreeData());
      setShowEditModal(false);
      setEmployeeToEdit(null);
      
      const updatedEmployee = tree.findNode(updatedData.id);
      if (updatedEmployee) {
        setSelectedEmployee({
          id: updatedEmployee.id,
          name: updatedEmployee.name,
          title: updatedEmployee.title,
          subordinates: tree.getSubordinatesCount(updatedEmployee.id)
        });
      }
    }
  };

  // Función auxiliar para obtener todos los empleados disponibles como padres
  const getAvailableParents = () => {
    const parents = [];
    tree.bfs((node) => {
      parents.push({
        id: node.id,
        name: node.name,
        title: node.title
      });
    });
    return parents;
  };


  const renderCustomNodeElement = (rd3tProps) => {
    const { nodeDatum } = rd3tProps;
    const handleClick = (e) => {
        e.stopPropagation();
        setContextMenuNodeId(nodeDatum.id);
        const employee = tree.findNode(nodeDatum.id);
        if (employee) {
            setSelectedEmployee({
                id: employee.id,
                name: employee.name,
                title: employee.title,
                subordinates: tree.getSubordinatesCount(employee.id)
            });
        }
    };
    
    return (
        <g>
            <foreignObject 
                x={-150} 
                y={-50} 
                width={300} 
                height={100} 
                className="tree-node"
                onClick={handleClick}
            >
                <div className="node-content">
                    <h3>{nodeDatum.name} - {nodeDatum.id}</h3>
                    <p>{nodeDatum.title}</p>
                    <p>Subordinados: {tree.getSubordinatesCount(nodeDatum.id)}</p>
                </div>
            </foreignObject>
        </g>
    );
  }
  


  return (
    <div className="app-container">
      <div className="main-content">
        <h1>Jerarquía de Empleados</h1>
        
        <EmployeeForm
          onAddEmployee={handleAddEmployee}
          availableParents={getAvailableParents()}
        />

        <div className="tree-container">
          {treeData && (
            <Tree
              data={treeData}
              orientation="vertical"
              pathFunc="step"
              translate={{ x: window.innerWidth / 3, y: 80 }}
              onNodeClick={(_, nodeData) => handleNodeClick(nodeData)}
              separation={{ siblings: 3, nonSiblings: 4 }}
              nodeSize={{ x: 320, y: 200 }}
              renderCustomNodeElement={renderCustomNodeElement}
              centeringTransitionDuration={200}
              zoomable={true}
              collapsible={false}
            />
          )}
        </div>
      </div>

      <EmployeePanel
        selectedEmployee={selectedEmployee}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
        onClose={() => setSelectedEmployee(null)}
      />

      {showEditModal && (
        <EditModal
          employee={employeeToEdit}
          onUpdate={handleUpdateEmployee}
          onClose={() => {
            setShowEditModal(false);
            setEmployeeToEdit(null);
          }}
        />
      )}
    </div>
  );
}
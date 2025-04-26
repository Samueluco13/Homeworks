import React from 'react'

export const TreeNode = ({node, onInsert}) => {
    if (!node) return null;

    return (
    <div className='node-container'>
        <div className='node'>
            {node.value}
            <div>
                <button onClick={() => onInsert(node, "izquierda")} >Left</button>
                <button onClick={() => onInsert(node, "derecha")} >Right</button>
            </div>
        </div>
        <div className='children'>
            <TreeNode node={node.izquierda} onInsert={onInsert} />
            <TreeNode node={node.derecha} onInsert={onInsert} />
        </div>
    </div>
    )
}

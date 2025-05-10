import React from 'react'
import Tree from 'react-d3-tree'
import { arbol1 } from '../data.js'
import { Link } from 'react-router-dom'

export const NewTree = () => {
    return (
    <div id="treeWrapper" style={{ width: '500px', height: '500px' }}>
        <ul>
            <ol>
                <Link to={"/prev-tree"} >Ir al arbol viejo</Link>
            </ol>
            <ol>
                <Link to={"/"} >Ir al home</Link>
            </ol>
        </ul>
        <hr />
        <h2>Arbol con la libreria</h2>
        <hr />
        <Tree
        data={arbol1}
        orientation="vertical" 
        renderCustomNodeElement={({ nodeDatum }) => (
            <g>
                <circle r="15" fill="lightblue" />
                <text fill="black" fontSize="14" textAnchor="middle" dy=".3em">{nodeDatum.name}</text>
            </g>
        )}
        />
    </div>
    )
}

import { Graph } from '../classes/Graph';
import { personas, ciudades } from '../data';
import { Graph as GraphComponent } from 'react-d3-graph';
import { useEffect, useRef, useState } from 'react';
import { Popup } from './Popup';

export const Grafo = () => {
    const [reload, setReload] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState("");

    const grafitoRef = useRef(new Graph());
    useEffect(() => {

        const grafito = grafitoRef.current;
    
        for (const persona of personas) {
            grafito.addNode(`${persona.name}_${persona.edad}`);
        }
    
        for (const ciudad of ciudades) {
            grafito.addNode(ciudad.name);
        }
    
        for (const persona of personas) {
            grafito.addEdge(`${persona.name}_${persona.edad}`, ciudades[Math.floor(Math.random() * ciudades.length)].name);
        }
        
    }, [reload])
    
    const data = {
        nodes: grafitoRef.current.nodes.map(nodo => ({id: nodo})),
        links: Object.entries(grafitoRef.current.adjList).flatMap(([fromNode, toNode]) =>
            toNode.map(target => ({ source: fromNode, target: target }))
        )
    }

    const handleClickNode = (node) => {
        const adjList = grafitoRef.current.getNodeAdjacencyList(node);
        if(adjList.length){
            setPopupText(`La lista de adyacencia del nodo ${node} es: ${JSON.stringify(adjList)}`);
        }else{
            setPopupText(`La lista de adyacencia del nodo ${node} está vacía`);
        }
        setShowPopup(true);
    }


    return (
        <>
            <div className="grafo">
                <GraphComponent
                id="graph-id"
                data={data}
                config={{
                    node: {
                        color: 'lightblue',
                        size: 2200,
                        fontSize: 12,
                        fontColor: 'black',
                        highlightStrokeColor: 'blue',
                        labelPosition: 'center'
                    },
                    link: {
                        highlightColor: 'red'
                    },
                    d3: {
                        gravity: -100,
                        linkLength: 200,
                    },
                    directed: false,
                    height: 500,
                    width: 800
                }}
                onClickNode={handleClickNode}
                />
            </div>
            <button onClick={() => setReload(!reload)} >Crear Grafo</button>
            {showPopup && (
                <Popup
                text={popupText}
                button={<button onClick={() => setShowPopup(false)} >Ok</button>}
                />
            )}
        </>
    )
}
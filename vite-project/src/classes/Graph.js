export class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {}; //Lista de adyacencia, a que nodos esta conectado cada nodo
    }

    addNode(node) {
        this.nodes.push(node); //Agrega el nodo al array de nodos
        this.adjList[node] = []; //Inicializa la lista de adyacencia para el nodo
    }

    addEdge(node1, node2) { //Para agregar una arista entre dos nodos
        this.adjList[node1].push(node2); //Agrega node2 a la lista de adyacencia de node1
        this.adjList[node2].push(node1); //Agrega node1 a la lista de adyacencia de node2 (si es no dirigido)
    }

    searchNode(node){
        if (!this.nodes.length) return; //Si no hay nodos, no hay nada que buscar
        return this.nodes.find(n => n === node); //Busca el nodo en el array de nodos
    }

    printAdjacency(node){ //Imprime la lista de adyacencia del nodo
        if(this.searchNode(node)){ //Busca que el nodo si exista
            console.log(this.adjList[node]); //Imprime la lista de adyacencia del nodo
        }
    }

    printGraph(){ //Imprime el grafo completo
        console.log(this.adjList);
    }

    getNodeAdjacencyList(node) { //Devuelve la lista de adyacencia
        if(this.searchNode(node)){ //Busca que el nodo si exista
            return this.adjList[node];
        }
    }
}
export class Node{
    constructor(name, title) {
        this.id = Math.random().toString(36).substring(2, 11); //Para crear un id aleatorio casi irreplicable
        this.name = name;
        this.title = title;
        this.children = [];
    }

    agregarHijo(nodo){
        this.hijos.push(nodo)
    }
}
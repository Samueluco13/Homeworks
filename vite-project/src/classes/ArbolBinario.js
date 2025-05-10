import {Node} from "./Node.js"

export class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    insertar(value){
        const newNode = new Node(value);
        if(!this.raiz){
            this.raiz = newNode;
            return;
        }

        let current = this.raiz;
        while(true){
            if(value < current.value){
                if(!current.izquierda){
                    current.izquierda = newNode;
                    return;
                }

                current = current.izquierda;
            }else {
                if(!current.derecha){
                    current.derecha;
                    return;
                }

                current = current.derecha;
            }
        }
    }

    preorderSearch(node, value){
        if (!node) return false;

        if (node.value === value) {
            return true;
        }

        const leftSearch = this.preorderSearch(node.izquierda, value);
        if (leftSearch) return true;

        const rightSearch = this.preorderSearch(node.derecha, value);
        if (rightSearch) return true;

        return false;


        // if(!this.raiz) return null; //Si no hay raiz, no hay arbol

        // let current = this.raiz; //Se define e inicializa el nodo actual en la raiz
        // while(current){ //Mientras existe un nodo actual
        //     if(value === current.value) return current; //Si el valor que buscamos es igual al del nodo actual, se devuelve true
        //     if(value < current.value) current = current.izquierda; //Si 
        //     else current = current.derecha;
        // }
        // return null;
    }

    preOrder(node){
        if(!node) return;

        console.log(node.value);
        this.preOrder(node.izquierda);
        this.preOrder(node.derecha);
    }

    inOrder(node){
        if(!node) return;

        this.inOrder(node.izquierda);
        console.log(node.value);
        this.inOrder(node.derecha);
    }

    postOrder(node){
        if(!node) return;

        this.postOrder(node.izquierda);
        this.postOrder(node.derecha);
        console.log(node.value);
    }
}
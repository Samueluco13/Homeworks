import {Node} from "./Node.js"

export class BinaryTree{
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

    preOrder(node){
        if(!node) return;

        console.log(node.value);
        this.preOrder(node.izquierda);
        this.preOrder(node.derecha);
    }

    inOrder(node){
        if(!node) return;

        this.preOrder(node.izquierda);
        console.log(node.value);
        this.preOrder(node.derecha);
    }

    postOrder(node){
        if(!node) return;

        this.preOrder(node.izquierda);
        this.preOrder(node.derecha);
        console.log(node.value);
    }
}
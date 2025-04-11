export class DoublyNode{ //NODO DOBLE
    constructor(value){
        this.value = value; //VALUE
        this.next = null; //POINTER TO NEXT
        this.prev = null; //POINTER TO PREVIOUS
    }
}


export class DoublyLinkedList{
    constructor(){
        this.head = null; //Cabeza (se esta inicializando vacia la lista)
        this.tail = null; //Ultimo nodo
        this.current = null; //Nodo actual
        this.lenght = 0; //Longitud de la lista
    }

    append(value){ //Metodo para agregar nuevos nodos al principio o al final
        const newDoublyNode = new DoublyNode(value); //Dentro de la variable se ingresa el objeto DoublyNode

        if(!this.head){ //Si no existe un head
            this.head = newDoublyNode; //El nuevo nodo se define como head
            this.tail = newDoublyNode; //Y también como tail, ya que es el unico elemento de la lista
            this.current = newDoublyNode; //Se define el nuevo noco como el actual
            return  
        }

        this.tail.next = newDoublyNode; //Se agrega el nodo al final de la lista
        newDoublyNode.prev = this.tail; //El anterior al nuevo nodo es la cola
        this.tail = newDoublyNode; //El nuevo nodo se convierte en la cola

        this.lenght ++; //Aumenta el tamaño de la lista
    }


    
    goPrev(){ //Regresa al nodo anterior
        if (this.current && this.current.prev){ //Si existe un nodo actual y un nodo anterior
            this.current = this.current.prev //El actual ahora es el anterior
        }
    }

    goNext(){ //Avanza al siguiente nodo
        if (this.current && this.current.next){ //Si existe un nodo actual y un nodo siguiente
            this.current = this.current.next //El actual ahora es el siguiente
        }
    }

    getCurrent() {
        return this.current?.value || null; //Devuelve el value del nodo actual o null si no existe
    }
}
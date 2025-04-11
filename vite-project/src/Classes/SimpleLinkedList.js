export class Node{ //NODO SIMPLE
    constructor(value){
        this.value = value; //VALUE
        this.next = null; //POINTER
    }
}


export class SimpleLinkedList{
    constructor(){
        this.head = null; //Cabeza (se esta inicializando vacia la lista)
        this.tail = null; //Ultimo nodo
        this.current = null; //Nodo actual
        this.lenght = 0; //Longitud de la lista
    }

    append(value){ //Metodo para agregar nuevos nodos al principio o al final
        const newNode = new Node(value); //Dentro de la variable se ingresa el objeto Node

        if(!this.head){ //Si no existe un head
            this.head = newNode; //El nuevo nodo se define como head
        }else{
            this.tail.next = newNode; //Agrega el nodo al final de la lista
        }

        this.tail = newNode; //Al solo haber una head esta tambien va a ser la tail
        this.lenght ++; //Aumenta el tamaño de la lista
    }

    getAll() {
        let result = []; //Define e iniciaiza result como array vacio
        this.current = this.head; //Inicializa current en el head
        while (this.current) { //Mientras exista un nodo actual
            result.push(this.current.value); //Agrega el value del nodo actual al array result
            this.current = this.current.next; //El actual ahora es el siguiente
        }
    return result; //Devuelve el array result
    }
}

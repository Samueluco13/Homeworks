import { Node } from "./Node";

export class BookList{
    constructor(value){
        this.value = value;
        this.head = null; //Cabeza (se esta inicializando vacia la lista)
        this.tail = null; //Ultimo nodo
        this.length = 0; //Longitud de la lista
    }

    //Metodo para agregar nuevos nodos al principio o al final
    append(value){
        const newNode = new Node(value); //Dentro de la variable se ingresa el objeto Node

        if(!this.head){ //Si no existe un head
            this.head = newNode; //El nuevo nodo se define como head
        }else{
            this.tail.next = newNode; //Agrega el nodo al final de la lista
        }

        this.tail = newNode; //Al solo haber una head esta tambien va a ser la tail
        this.lenght ++; //Aumenta el tamaño de la lista
    }

    //Devuelve un nodo que esté dentro de la lista
    peek(isbn, current = this.head) {
        while(current){ //Mientras exista el nodo actual
            if(current.value.isbn === isbn){ //Si el valor del nodo actual es el solicitado
                return current; //Devuelve el nodo actual
            }
            current = current.next //Se pasa al siguiente nodo
        }
        return null;
    }

    //Devuelve el numero de elementos de la lista
    size(){
        return this.length;
    }

    //Elimina un nodo de la lista y lo remplaza por el siguiente
    remove(isbn, current = this.head){
        if(!this.head){
            return null;
        }

        if(this.head.value.isbn === isbn){ //Si el value de la head es el valor que se busca
            this.head = this.head.next; //Cambia la head al siguiente nodo

            if(!this.head){ //En caso de que no haya cabeza y sea el unico nodo
                this.tail = null; //La cola también debe ser null
            }

            this.length --; //Reduce el tamaño de la lista
            return;
        }


        //let current = this.head; //Se re-define e inicializa current en el head

        while(current.next && current.next.value.isbn !== isbn){ //Mientras exista un nodo siguiente al actual Y el value del nodo actual no sea el buscado
            current = current.next; //El actual ahora es el siguiente
        }

        if(current.next){ //Si existe un nodo siguiente al actual
            current.next = current.next.next //Se define el siguiente al actual como el siguiente de ese

            if(!current.next){ //Si no existe un nodo siguiente al actual
                this.tail = current; //La cola es el nodo actual
            }
            this.length --; //Se reduce el tamaño de la lista
        } 
    }

    //Imprime el contenido de una lista
    print(){
        let current = this.head; //Define e inicializa el nodo actual en el head
        let result = "" //Define un resultado vacio

        while(current){ //Mientras exista un nodo actual
            result += current.value + " -> " //Le agrega al resultado el valor del nodo actual y una representacion del pointer
            current = current.next //Ahora el nodo actual es el siguiente
        }
        console.log(result + "null") //Se imprime el resultado
    }

    //Convierte la lista en un arreglo
    toArray() {
        const librosArray = []; //Define un nuevo arreglo
        let current = this.head; //Define e inicializa el nodo actual en la head

        while (current) { //Si existe un actual
            librosArray.push(current.value); //Agrega el valor del nodo actual al arreglo
            current = current.next; //Ahora el nodo actual es el que le sigue
        }
        return librosArray;
    }
}

export class UsersQueue{
    constructor(){
        this.items = []
    }

    enqueue(item){ //Agrega un elemento al final de la fila
        this.items.push(item)
    }

    dequeue(){ //Si en la cola hay elementos, devuelve y eleimina el primer elemento, sino nada
        return this.items.length > 0 ? this.items.shift() : null
    }

    peek(){ //Si hay elementos en la cola, devuelve el primer elemento sin eliminarlo
        return this.items.length > 0 ? this.items[0]: null
    }

    size(){ //Devuelve el tamaño de la cola
        return this.items.length
    }

    isEmpty(){ //Devuelve TRUE si la cola está vacía
        return this.items.length === 0
    }

    print(){ //Devuelve cada elemento de la cola
        this.items.array.forEach(item => {
            console.log(item)
        });
    }

}
export class Consultas{
    constructor(){
        this.consulta = []
    }

    enqueue(item){ //Agrega un elemento al final de la fila
        this.consulta.push(item)
    }

    dequeue(){ //Si en la cola hay elementos, devuelve y eleimina el primer elemento, sino nada
        return this.consulta.length > 0 ? this.consulta.shift() : null
    }

    peek(){ //Si hay elementos en la cola, devuelve el primer elemento sin eliminarlo
        return this.consulta.length > 0 ? this.consulta[0]: null
    }

    size(){ //Devuelve el tamaño de la cola
        return this.consulta.length
    }

    isEmpty(){ //Devuelve TRUE si la cola está vacía
        return this.consulta.length === 0
    }

    print(){ //Devuelve cada elemento de la cola
        this.consulta.forEach(item => {
            console.log(item)
        });
    }

    getAll() {
        return [...this.consulta];
    }

}
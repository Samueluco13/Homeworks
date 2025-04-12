export class Results{
    constructor() {
        this.results = []
    }

    push(value){
        this.results.push(value) //Agrega un elemento al final de la pila
        return this.results //Devuelve la pila actualizada
    }

    pop(){ //Si la pila tiene elementos, devuelve y elimina el ultimo valor ingresado a la pila, sino nada
        return this.results.length > 0 ? this.results.pop() : null
    }

    peek(){ //Si la pila tiene elementos, devuelve el ultimo elemento que se ingresó sin eliminarlo, sino nada
        return this.results.length > 0 ? this.results[this.results.length - 1] : null
    }

    isEmpty(){ //Devuelve TRUE si la pila está vacía
        return this.results.length === 0
    }

    size(){ //Devuelve la longitud de la pila
        return this.results.length
    }

    print(){ //Devuelve el contenido de la pila
        /*
        .slice() hace una copia superficial de la pila
        .reverser() invierte el orden de la copia
        .forEach() recorre cada uno de los elementos de la copia invertida y los imprime
        */
        this.results.slice().reverse().forEach(item => {
            console.log(item)
        });
    }
}
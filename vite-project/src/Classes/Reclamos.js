export class Reclamos{
    constructor(){
        this.reclamo = []
    }

    push(value){
        this.reclamo.push(value) //Agrega un elemento al final de la pila
    }

    pop(){ //Si la pila tiene elementos, devuelve y elimina el ultimo valor ingresado a la pila, sino nada
        return this.reclamo.length > 0 ? this.reclamo.pop() : null
    }

    peek(){ //Si la pila tiene elementos, devuelve el ultimo elemento que se ingresó sin eliminarlo, sino nada
        return this.reclamo.length > 0 ? this.reclamo[this.reclamo.length - 1] : null
    }

    isEmpty(){ //Devuelve TRUE si la pila está vacía
        return this.reclamo.length === 0
    }

    size(){ //Devuelve la longitud de la pila
        return this.reclamo.length
    }

    print(){ //Devuelve el contenido de la pila
        /*
        .slice() hace una copia superficial de la pila
        .reverser() invierte el orden de la copia
        .forEach() recorre cada uno de los elementos de la copia invertida y los imprime
        */
        this.reclamo.slice().reverse().forEach(item => {
            console.log(item)
        });
    }

    getAll() {
        return [...this.reclamo];
    }

}
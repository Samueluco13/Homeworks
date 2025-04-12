export class Person{
    constructor(name, withdrawal){
        this.name = name
        this.withdrawal = withdrawal
    }

}


export class PeopleQueue{
    constructor(){
        this.people = []
    }

    enqueue(person){ //Agrega un elemento al final de la fila
        this.people.push(person)
    }

    dequeue(){ //Si en la cola hay elementos, devuelve y eleimina el primer elemento, sino nada
        return this.people.length > 0 ? this.people.shift() : null
    }

    peek(){ //Si hay elementos en la cola, devuelve el primer elemento sin eliminarlo
        return this.people.length > 0 ? this.people[0]: null
    }

    size(){ //Devuelve el tamaño de la cola
        return this.people.length
    }

    isEmpty(){ //Devuelve TRUE si la cola está vacía
        return this.people.length === 0
    }

    print(){ //Devuelve cada elemento de la cola
        this.people.forEach(person => {
            console.log(person)
        });
    }

    getPeople(){ //Devuelve toda la cola
        return [...this.people]
    }

}
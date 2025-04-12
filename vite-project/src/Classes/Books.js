export class Book{
    constructor(name, isbn, author, editorial){
        this.name = name
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }

}

export class BookStack{

    constructor(){
        this.books = []
    }

    push(value){
        this.books.push(value) //Agrega un elemento al final de la pila
    }

    pop(){ //Si la pila tiene elementos, devuelve y elimina el ultimo valor ingresado a la pila, sino nada
        return this.books.length > 0 ? this.books.pop() : null
    }

    peek(){ //Si la pila tiene elementos, devuelve el ultimo elemento que se ingresó sin eliminarlo, sino nada
        return this.books.length > 0 ? this.books[this.items.length - 1] : null
    }

    isEmpty(){ //Devuelve TRUE si la pila está vacía
        return this.books.length === 0
    }

    size(){ //Devuelve la longitud de la pila
        return this.books.length
    }

    print(){ //Devuelve el contenido de la pila
        /*
        .slice() hace una copia superficial de la pila
        .reverser() invierte el orden de la copia
        .forEach() recorre cada uno de los elementos de la copia invertida y los imprime
        */
        this.books.slice().reverse().forEach(book => {
            console.log(book)
        });
    }

    getBooks(){ //Devuelve toda la pila
        return [...this.books];
    }

}

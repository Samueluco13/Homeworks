//La función ".at()"" devuelve el elemento en la posicion que se le indique

const marcas = ["Mazda", "Honda", "Toyota", "Pagani", "Hyundai", "Chevrolet", "Renault", "Apollo"];

const posi = marcas.at(4);
console.log(posi);


//La función ".concat()" devuelve un Array o un String de los arreglos unidos, uno delante del otro.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const unidos = marcas.concat(numeros);
console.log(unidos);


//La función ".copyWithin()" sirve para copiar elementos del array hacia la posicion seleccionada del mismo array sin cambiar su tamaño.
numeros.copyWithin(0, 2)//Se para en la posicion "0", la reemplaza por lo que esté en la posicion "2" y desde ahí avzanza
console.log(numeros) //Se modifica el array original


// La función ".entries()"
const CV = numeros.entries()
console.log(CV)


//La función ".every()" se encarga verificar si CADA UNO de los elementos de un array cumple una condición, devuelve "true" o "false"
const negativos = numeros.every(x => x < 0)
console.log(negativos)


//La función ".fill()" llena un array con un valor especifico, se puede realizar en rangos
marcas.fill("x", 0, 3)
console.log(marcas) //Se actrualiza el array original


//La función ".filter()" devuelve un array con los valores que cumplen con la condición
const filtro = numeros.filter(y => y > 5)
console.log(filtro)


//La función ".find()" devuelve el primer valor que cumpla con la condición establecida
const primero = numeros.find(z => z > 7)
console.log(primero)


//La función ".findIndex()" devuelve el indice del primer elemento del arreglo que cumple la condición
const indice = numeros.findIndex(i => i > 8)
console.log(indice)


//La función ".findLast()" devuelve el ultimo valor de un array que cumpla con cierta condición
const ultimo = numeros.findLast(u => u > 6)
console.log(ultimo)


//La función ".findLastIndex()" devuelve el indice del ultimo elemento del arreglo que cumple la condición
const ultimoIndice = numeros.findLastIndex(t => t < 9)
console.log(ultimoIndice)


//La función ".flat()" devuelve un array aplanado a los niveles que se le especifique
const multi = [[[[1, 2], 3], 4], 5];

const aplanado = multi.flat()
console.log(aplanado)


//La función ".flatMap()" aplica una funcion a cada elemento de un narray y después lo aplana
nums = [1, 2, 3, 4]

const kiko = nums.flatMap(n => [n, n * 2])
console.log(kiko)


//La función ".map()" crea un array nuevo donde se le aplica una funcion a cada uno de los elemenos
const mapa = nums.map(m => [m])
console.log(mapa)


//La función ".forEach()" por cada elemento del array se aplcia una función
nums.forEach(c => console.log(c * 5))


//La función ".includes()" devuelve true o false dependiendo si el elemento especificado se encuentra en el array
const inc = nums.includes(5)
console.log(inc)


//La funcíón ".indexOf()" devuelve el primer indice de un numero de un array, si no está devuelve "-1"
const de = numeros.indexOf(8)
console.log(de)


//La función ".join()" une los elementos tipo texto de un array
const une = marcas.join("_")
console.log(une)


//La función ".pop()" elimina el ultimo elemento del array y se guarda en variable
const jaja = numeros.pop()
console.log(jaja)


//La función ".push()" agrega un elemento al final del array
numeros.push(9)
console.log(numeros)


//La función ".reduce()" 
//const reducido = nums.reduce()



//La función ".reverse()" invierte el orden de los elementos de un array
marcas.reverse()
console.log(marcas)


//La función ".shift()" elimina el primer elemento del array y lo guarda
const first = nums.shift()
console.log(first)



//La función ".shift()" elimina el primer elemento del array y lo guarda
nums.unshift(1)
console.log(nums)


//La función ".slice()" extrae una parte del array sin afectar el original
const parte = numeros.slice(0, 4)
console.log(parte)


//La función ".some()" se encarga de devolver true o false en caso de que algun elemento del array cumpla con la condicion
const alguno = numeros.some(g => g > 10)
console.log(alguno)


//La función ".sort()" se encarga de ordenar el array de menor a mayor
numeros.sort()
console.log(numeros)


//La función ".splice()" elimina desde una posicion especifica la cantidad de elementos que se le diga y devuelve un arreglo con esos elementos
const chao = numeros.splice(6, 2)
console.log(chao)
console.log(numeros)


//
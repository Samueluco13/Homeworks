/* 
Las funciones flecha no pueden ser usadas como constructores.
Las funciones flecha se guardan una variable.
Las funciones flecha se pueden escribir en una sola linea de codigo.
Las funciones flecha tienen una sintaxis mas corta que permite eliminar partes de su estructura a la hora de crearlas.
    Ej: Si solo se usa un parametro se pueden omitir los parentesis
    Si solo es una orden/proceso corto, se pueden omitir las llaves
La funcioón flecha cuenta con el operador ternario " ? : ", se usa como una version compacta del if else.
*/


//FUNCIÓN NORMAL
function par(numero){
    if (numero % 2 == 0) {
        console.log("El número " + numero + " es par")
    }
    else{
        console.log("El número " + numero + " es impar")
    }
}


//FUNCIÓN FLECHA
const impar = num => console.log(`El número ${num} es ${num % 2 == 0 ? "par" : "impar"}`)


//Ejemplos
par(8)
par(7)


impar(24)
impar(99)
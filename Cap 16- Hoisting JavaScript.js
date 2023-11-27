'use strict' //Con esta linea se desactiva el concepto de hoisting
/*
Hoisting= La declaracione de una variable puede estar en cualquier parte del programa (Es decir, podemos usar una variable y despues declararla)
Con let el concepto no aplica. Una vez definida por let no se puede volver a definir
*/
//Camino tradicional:
//var x ;        //1. Declarar la variable
x = 10;         //2. Inicializamos la variable
//y=5; al usar let no aplica el concepto de hoisting
console.log(x);

var x;
let y


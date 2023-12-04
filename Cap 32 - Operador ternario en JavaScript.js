//Cap 32 - Operador ternario en JavaScript
/*
El operador ternario, es una simplificacion de la sentencia if else

//Sintaxis if/else
if (condicion) {
  //Bloque T
} else {
  //Bloque F
}

//Sintaxis Operador Ternario
//(Es un if/else de una sola linea)
condicion ? caso_verdadero : Caso_falso;
*/

let miNumero = 0;
//Revisar si el numero es positivo
/*
if (miNumero > 0) {
  console.log(`Valor positivo: ${miNumero}`);
} else {
  console.log(`Valor cero o negativo${miNumero}`);
}
*/

//Operador Ternario//
miNumero > 0 ? console.log(`Positivo`) : console.log(`Negativo`);

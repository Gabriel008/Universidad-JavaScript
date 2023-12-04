//Cap 38 - Ciclo do while en JavaScript
/*
    CICLO DO WHILE
    Sintaxis:
        do{
            //BLOQUE DE CODIGO
        }while(condicion);

        //El ciclo do while ejecuta al menos una veez su bloque de codigo debido a que la condicion a revisar se encuentre al final del bloque
 */

//Ciclo do while
//imprimir valores del 0 al 5
let contador = 0; repeticiones = 5;
do {
    console.log(contador++);
} while (contador <= repeticiones);


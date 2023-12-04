//Cap 37 - Ciclo while en JavaScript
/*
    CICLOS: Nos permite repetir bloques de codigo mientras la condicion sea verdadera.

    TIPOS DE CICLOS:
        -Ciclo while 
        -Ciclo do while 
        -Ciclo for 

    CICLO WHILE
        Sintaxis:

        while(condicion){
            //BLOQUE DE CODIGO
        }
        //La condicion es un valor logico (true/false)
        //El ciclo while repite la ejecucion del bloque de codigo mientras la condicion sea verdadera (true)
 */


//Ciclo while (imprimir valores del 0 al 5)

let contador = 0; repeticiones = 5;
while (contador <= repeticiones) {
    /*
    console.log(contador);
    contador++;
     */
    console.log(contador++);

}


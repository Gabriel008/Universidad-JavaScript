//Cap 23 - Operadores relacionales (comparacion)
let a = 5;
let b = '5';
console.log(a);
console.log(b);

//Operador de igualdad == (solo compara valores y hace una conversion si es necesario)
console.log("a == b ->", a==b);
console.log(`${a} == ${b} -> ${a==b}`); //Interpolation


//Operador de igualdad estricta === (solo compara valores y el tipo de dato)
console.log("a === b ->", a===b);

//String interpolation (`)-> Backstick
console.log(`Texto... ${a}`);
console.log(`${a} === ${b} -> ${a === b}`);
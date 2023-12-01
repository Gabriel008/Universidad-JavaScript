//Cap 23 - Operadores relacionales (comparacion)
let a = 5;
let b = "5";
console.log(a);
console.log(b);

//Operador de igualdad == (solo compara valores y hace una conversion si es necesario)
console.log("a == b ->", a == b);
console.log(`${a} == ${b} -> ${a == b}`); //Interpolation

//Operador de igualdad estricta === (solo compara valores y el tipo de dato)
console.log("a === b ->", a === b);

//String interpolation (`)-> Backstick
console.log(`Texto... ${a}`);
console.log(`${a} === ${b} -> ${a === b}`);

//Cap 24 - Operadores relacionales 2
//Operador distinto
//compara valor y convierte el tipo de dato si es necesario
console.log("a != b ->", a != b);
console.log(`${a} != ${b} -> ${a != b}`);

//Operador distinto extricto
//compara valor y el tipo de dato
console.log("a !== b ->", a !== b);
console.log(`${a} !== ${b} -> ${a !== b}`);

//operador menor que
console.log("a < b ->", a < b);
console.log(`${a} < ${b} -> ${a < b}`);

//operador menor igual que
console.log("a <= b ->", a <= b);
console.log(`${a} <= ${b} -> ${a <= b}`);

//operador mayor que
console.log("a > b ->", a > b);
console.log(`${a} < ${b} -> ${a < b}`);

//operador mayor igual que
console.log("a >= b ->", a >= b);
console.log(`${a} >= ${b} -> ${a >= b}`);

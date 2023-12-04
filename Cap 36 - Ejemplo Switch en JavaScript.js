//Cap 36 - ejemplo Switch en JavaScript

//Dia de la semana (switch)
let diaSemana = 1;
switch (diaSemana) {
  case 1: //dia semana==1
    console.log(`Lunes`);
    break;

  case 2:
    console.log(`Martes`);
    break;

  case 3:
    console.log(`Miercoles`);
    break;

  case 4:
    console.log(`Jueves`);
    break;

  case 5:
    console.log(`Viernes`);
    break;

  case 6:
    console.log(`Sabado`);
    break;

  case 7:
    console.log(`Domingo`);
    break;

  default:
    console.log(`Dia semana erroneo ${diaSemana}`);
    break;
}

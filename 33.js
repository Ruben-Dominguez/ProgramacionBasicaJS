// 33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas,
// las almacene en y calcule e imprima su media.

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function input(pregunta){
  return new Promise((resolve, reject) => {
    readlineInterface.question(pregunta, resolve);
  });
}

main();

async function main(){

  let opcion = 0;
  let suma = 0;

  let materias = [
    "Algebra",
    "Matematicas",
    "Espanol",
    "Programacion",
    "Ingles",
    "Dibujo",
    "Artes",
    "Derecho",
    "Fisica",
    "Quimica"
  ];

  let calificaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


  while(opcion != 4){
    console.log("\nOpciones:");
    console.log("(1). Ingresar calificaciones \n(2). Ver calificaciones"
                +"\n(3). Calcular media \n(4). Salir");

    opcion = await input("Opcion: ");

    if(opcion == 1){
      for(let i=0; i<10; i++){
        calificaciones[i] = await input(`Calificacion para ${materias[i]}: `);
      }
    }
    else if (opcion == 2){
      console.log("#### CALIFICACIONES ####")
      for(let i=0; i<10; i++){
        console.log(`Calificacion para ${materias[i]}: ${calificaciones[i]}`);
      }
    }
    else if (opcion == 3){
      suma = 0;
      for(let i=0; i<10; i++){
        suma+=parseFloat(calificaciones[i]);
      }
      console.log(`La media es: ${suma/10}`);
    }
    else if (opcion == 4) {
      console.log("Bye Bye!");
    }
    else {
      console.log("No entendi, intente de nuevo");
    }

  }

  process.exit();
}

// 34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.

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
  let num = 0.0;
  let index = 0;

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


  while(opcion != 5){
    console.log("\nOpciones:");
    console.log("(1). Ingresar calificaciones \n(2). Ver calificaciones"
                +"\n(3). Calcular media \n(4). Buscar por numero \n(5). Salir");

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
      num = await input("Ingrese el numero a buscar: ");
      for(let i=0; i<10; i++){
        if(num==calificaciones[i]){
          index=i;
          break;
        }
        index=-1;
      }
      if(index == -1){
        console.log("No se encontro esa calificacion");
      }
      else {
        console.log(`La materia con esa calificacion es: ${materias[index]}`);
      }
    }
    else if (opcion == 5) {
      console.log("Bye Bye!");
    }
    else {
      console.log("No entendi, intente de nuevo");
    }

  }

  process.exit();
}

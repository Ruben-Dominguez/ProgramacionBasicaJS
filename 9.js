// 9.- Introducir un número por teclado y que nos diga si es positivo o negativo.

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

  console.log("Bienvenido al diferenciador de numeros +/-");
  let numero = await input("Ingrese un numero: ");

  if(numero > 0){
    console.log("El numero es positivo +");
  }
  else if(numero < 0) {
    console.log("El numero es negativo -");
  }
  else {
    console.log("Es neutro ( 0 )");
  }
  process.exit();
}

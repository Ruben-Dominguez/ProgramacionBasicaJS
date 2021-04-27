// 17.- Imprimir,  contar  y  sumar  los  múltiplos  de  2  que  hay  entre  una
// serie  de  números,  tal  que  el segundo sea mayor o igual que el primero.

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
  let num1 = await input("Introduzca el numero 1: ");
  let num2 = await input("Introduzca el numero 2: ");
  let count = 0;
  let suma = 0;

  while (num2 < num1) {
    num2 = await input("Introduzca el numero 2 (debe ser mayor): ");
  }

  for(let i=num1; i<=num2; i++){
    if(i % 2 == 0){
      console.log(i)
      count++;
      suma+=parseInt(i);
    }
  }
  console.log(`La cantidad de numeros pares es: ${count}`);
  console.log(`La suma de estos es: ${suma}`);
  process.exit();
}

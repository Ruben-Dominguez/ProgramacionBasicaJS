// 10.- Introducir un número por teclado y que nos diga si es par o impar.

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
  let num = await input("Introduce un numero para saber si es par o non: ");
  if(num % 2 == 0){
    console.log(`${num} es par`);
  }
  else {
    console.log(`${num} es non`);
  }
  process.exit();
}

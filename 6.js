// 6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un número que introducimos por teclado.

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
  let num = await input("Ingrese un numero para contar desde el 1: ")
  for(let i = 1; i<=num; i++){
    console.log(i);
  }
  process.exit();
}

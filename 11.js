// 11.- Imprimir  y  contar  los  múltiplos  de  3  desde  el  uno  hasta  un  número  que  introducimos  por teclado.

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
  console.log("Bienvenido al programa para contar multiplos de 3");
  let num = await input("Ingrese el numero: ");
  let count = 0;
  for(let i=1; i<=num; i++){
    if(i%3 == 0){
      console.log(i);
      count++;
    }
  }
  console.log(`El numero total de multiplos de 3 del 1 hasta ${num} es: ${count}`)
  process.exit();
}

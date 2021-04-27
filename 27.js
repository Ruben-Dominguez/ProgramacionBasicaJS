// 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.

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

  let num = await input("Digite un numero para sacar su tabla de mult: ");

  for(let i=0; i<=10; i++){
    console.log(`~ ${i} x ${num} = ${num*i}`);
  }

  process.exit();
}

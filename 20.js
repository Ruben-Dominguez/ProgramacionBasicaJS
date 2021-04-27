// 20.- Calcular el factorial de un número, mediante funciones.

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

function fact(number, result){
  if(number == 0){
    return 1;
  }
  if(number == 1){
    return result;
  }
  else{
    return fact(number-1, result*number);
  }
}

main();

async function main(){
  let result = 1;
  let num = await input("Escriba el numero a sacar su factorial (no negativos): ");
  console.log(`Factorial de ${num} es: ${fact(num, result)}`);
  process.exit();
}

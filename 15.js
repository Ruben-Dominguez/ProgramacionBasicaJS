// 15.- Introducir  dos  números  por  teclado.  Imprimir  los  números
// naturales  que  hay  entre  ambos números  empezando  por  el  más  pequeño,
// contar  cuántos  hay  y  cuántos  de  ellos  son  pares. Calcular la suma de los impares.

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

  var minimo = num1 < num2 ? num1 : num2;
  var maximo = num1 == minimo ? num2 : num1;
  let count = 0;
  let countPares = 0;
  let sumaImpares = 0;

  console.log("Numeros entre ellos:")
  for(let i=minimo; i<=maximo; i++){
    console.log(i);
    count++;
    if(i%2 == 0){
      countPares++;
    }
    else {
      sumaImpares += parseInt(i);
    }
  }

  console.log(`Existen ${count} numeros entre ellos`)
  console.log(`de esos ${countPares} son pares`)
  console.log(`y los impares de entre ellos suman: ${sumaImpares}`)

  process.exit();
}

// 14.- Hacer  un  programa  que  imprima  el  mayor  y  el  menor  de  una
// serie  de  cinco  números  que vamos introduciendo por teclado

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
  console.log("Bienvenido a mayor/menor de 5 numeros.");
  let serie = [];
  for(let i=0; i<5; i++){
    let num = await input(`Introduce el valor #${i+1}: `);
    serie.push(num);
  }

let minimo = serie[0];
let maximo = serie[0];

for(let i=0; i<5; i++){
  if(serie[i]>maximo)
    maximo = serie[i];
  if(serie[i]<minimo)
    minimo = serie[i];
}

console.log(`El numero mayor es: ${maximo}`);
console.log(`El numero menor es: ${minimo}`);

  process.exit();
}

// 18.- Hacer  un  programa  que  cuente  las  veces  que  aparece  una
// determinada  letra  en  una  frase que introduciremos por teclado.

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
  let frase = await input("Introduzca la frase:");
  let letra = await input("Letra a contar: ");
  let count = 0;

  for(let i=0; i<=frase.length; i++){
    if(frase[i] == letra){
      count++;
    }
  }
  console.log(`Las veces que se repite la letra en la frase es: ${count}`);

  process.exit();
}

// 7.- Introducir tantas frases como queramos y contarlas.

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
  let frases = -1;
  var resp = "";
  while(resp != "no"){
    resp = await input("Frase ('no' para salir): ");
    frases++;
  }
  console.log(`Total de frases: ${frases}`);
  process.exit();
}

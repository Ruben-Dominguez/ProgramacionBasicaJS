// 26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla.

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
  let frase = await input("Digite la frase a centrar:\n");
  let width = process.stdout.columns;

  let blanks = (width - frase.length) / 2;
  let final = "";

  for(let i=0; i<blanks; i++){
    final+=" ";
  }
  final+=frase;
  for(let i=0; i<blanks; i++){
    final+=" ";
  }

  console.log(final);

  process.exit();
}

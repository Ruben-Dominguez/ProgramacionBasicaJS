// 22.- Introducir  una  frase  por  teclado.  Imprimirla  cinco  veces  en  filas
//  consecutivas,  pero  cada impresión ir desplazada cuatro columnas hacia la derecha.

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

  let frase = await input("Introduzca una frase:\n");

  console.log("Frase recorrida:")
  for(let i=0; i<5*4; i+=4){
    let nuevaFrase = "";
    for(let j=1; j<=i; j++){
      nuevaFrase+=" ";
    }
    nuevaFrase+=frase;
    console.log(nuevaFrase);
  }

  process.exit();
}

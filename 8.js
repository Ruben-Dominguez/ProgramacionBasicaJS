// 8.- Hacer un programa que solo nos permita introducir S o N.

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
  let resp = await input("Ingrese PORFAVOR 'S' o 'N':");
  while(resp.toUpperCase()!="S" && resp.toUpperCase()!="N"){
    resp = await input("PORRRFFAAAVOOOOORRRRR 'S' o 'N' !!!!!!\nINGRESELOOO: ");
  }
  console.log("Ke le costaba joben muy bien!");
  process.exit();
}

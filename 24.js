// 24.- Comprobar si un número mayor o igual que la unidad es primo.
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
  let times = 0;
  let number = 1;

  let max = await input("Ingrese un numero para saber is es primo: ")

  while(number <= max){
    if(max%number == 0){
      times++;
    }
    number++;
  }
  if(times==2)
    console.log("Es primo");
  else
    console.log("No es primo");

  process.exit();
}

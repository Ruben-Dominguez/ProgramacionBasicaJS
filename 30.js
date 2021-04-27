// 30.-  Introducir  dos  números  por  teclado  y  mediante  un  menú,
//  calcule  su  suma,  su  resta,  su multiplicación o su división.

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
  let num1 = await input("Ingrese el primer numero: ");
  let num2 = await input("Ingrese el segundo numero: ");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  console.log("\nOpciones:")
  console.log("(1). Sumar \n(2). Restar \n(3). Multiplicar \n(4). Dividir");
  opcion = await input("Que desea hacer: ");
  if(opcion == 1){
    console.log(`La suma es = ${num1+num2}`);
  }
  else if(opcion == 2){
    console.log(`La resta es = ${num1-num2}`);
  }
  else if(opcion == 3){
    console.log(`La multiplicacion es = ${num1*num2}`);
  }
  else if(opcion == 4){
    try{
      if(num2 == 0)
        throw("division por 0");
      console.log(`La division es = ${num1/num2}`);
    } catch(e){
      console.error("No se puede dividir entre 0");
    }
  }
  else {
    console.log("No entendi");
  }


  process.exit();
}

// 31.- Hacer  un  programa  que  nos  permita  introducir  un  número  por  teclado
// y  sobre  él  se  realicen las  siguientes  operaciones:  comprobar  si  es  primo,
//  hallar  su  factorial  o  imprimir  su  tabla  de multiplicar.

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

function esPrimo(max){
  let times = 0;
  let number = 1;

  while(number <= max){
    if(max%number == 0){
      times++;
    }
    number++;
  }
  if(times==2)
    return(true);
  else
    return(false);
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

  let opcion = 0;
  let result = 1;
  let numero = 0;

  while(opcion != 4){
    console.log("\nOpciones:");
    console.log("(1). Saber si es primo \n(2). Sacar su factorial"
                +"\n(3). Sacar tabla de multiplicar \n(4). Salir");

    opcion = await input("Opcion: ");

    if(opcion == 1 || opcion == 2 || opcion == 3)
      numero = await input("\nIgrese el numero: ");
    if(opcion == 1){
      let primo = esPrimo(numero);
      if(primo)
        console.log("Es primo");
      else
        console.log("No es primo");
    }
    else if (opcion == 2){
      console.log(`Factorial de ${numero} es: ${fact(numero, result)}`);
    }
    else if (opcion == 3){
      for(let i=0; i<=10; i++){
        console.log(`~ ${i} x ${numero} = ${numero*i}`);
      }
    }
    else if (opcion == 4) {
      console.log("Bye Bye!")
    }
    else {
      console.log("No entendi, intente de nuevo")
    }

  }

  process.exit();
}

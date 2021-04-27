// 25.- Introducir un número menor de 5000 y pasarlo a numero romano.

// en este la verdad no pude pasar del 4000 ya que se necesitan caracteres especiales
// que tienen una rayita arriba pero a logica es la misma, nada mas es agregar 0s

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

  let numero = await input("Introduzca un numero a convertir: ");
  let num = numero;
  let romano = "";

  if(numero > 0){
    while(numero / 1000 >= 1){
      romano+="M";
      numero-=1000;
    }
    if(numero >= 900){
      romano+="CM";
      numero-=900;
    }
    else if(numero / 500 >= 1){
      romano+="D";
      numero-=500;
    }
    else if(numero >= 400){
      romano+="CD";
      numero-=400;
    }
    while(numero / 100 >= 1){
      romano+="C";
      numero-=100;
    }
    if(numero >= 90){
      romano+="XC";
      numero-=90;
    }
    else if(numero / 50 >= 1){
      romano+="L";
      numero-=50;
    }
    else if(numero >= 40){
      romano+="XL";
      numero-=40;
    }
    while(numero / 10 >= 1){
      romano+="X";
      numero-=10;
    }
    if(numero >= 9){
      romano+="IX";
      numero-=9;
    }
    else if(numero / 5 >= 1){
      romano+="V";
      numero-=5;
    }
    else if(numero >= 4){
      romano+="IV";
      numero-=4;
    }
    while(numero >= 1){
      romano+="I";
      numero-=1;
    }
  }

  console.log(`El numero: ${num} se traduce a: ${romano}`);
  process.exit();
}

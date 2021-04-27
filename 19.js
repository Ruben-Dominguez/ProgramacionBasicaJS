// 19.- Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en hora.

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
  let hora = 0;
  let minuto = 0;
  let segundo = 0;
  let opcion = null;

  setInterval(()=>{
    segundo++;
    if(segundo >= 60){
      minuto++;
      segundo=0;
      if(minuto >= 60){
        hora++;
        minuto=0;
        if(hora >= 24){
          hora=0;
          minuto=0;
          segundo=0;
        }
      }
    }
  }, 1000);


  while(opcion != 3){
    console.log("\n(1). Checar hora \n(2). Cambiar hora \n(3). Salir");
    opcion = await input("Que desa hacer: ");
    if(opcion == 1){
      let horaS = hora.toString();
      let minutoS = minuto.toString();
      let segundoS = segundo.toString();

      if(horaS.length < 2)
        horaS = "0" + horaS;
      if(minutoS.length < 2)
        minutoS = "0" + minutoS;
      if(segundoS.length < 2)
        segundoS = "0" + segundoS;

      console.log(`\nRELOJ: ${horaS}:${minutoS}:${segundoS}`);
    }
    else if (opcion == 2){
      hora = await input("Hora nueva: ");
      minuto = await input("Minuto nuevo: ");
      segundo = await input("Segundo nuevo: ");
    }
    else if(opcion == 3){
      console.log("Bye Bye");
    }
    else {
      console.log("No entendi, intente de nuevo")
    }
  }

  process.exit();
}

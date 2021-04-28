// 43.- Dado  el  archivo  DATOS.DAT,  realizar  un  programa  que  nos  permita
// realizar  modificaciones cuantas veces deseemos.
//TODO

const readline = require('readline');
const fs = require('fs');

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

  while(true){
    let id = await input("Ingrese el id: ");
    let nombre = await input("Ingrese el nombre: ");
    let apellidos = await input("Ingrese el apellidos: ");
    let direccion = await input("Ingrese el direccion: ");
    let estado = await input("Ingrese el estado: ");

    let obj = {
      "id": id,
      "nombre": nombre,
      "apellidos": apellidos,
      "direccion": direccion,
      "estado": estado
    }

    fs.appendFileSync('DATOS.DAT', JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('a');
    });
  }

    process.exit();
}

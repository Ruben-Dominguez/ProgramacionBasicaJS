// 41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT,
// cuyos campos son: ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.

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


  process.exit();
}

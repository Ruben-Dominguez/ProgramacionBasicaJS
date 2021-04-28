// 45.- Tenemos  el  archivo  DATOS.DAT  con  la  misma  estructura  anterior,
// que  esta  indexado  por  el campo ID. Crear un
// programa que nos permita consultar un registro siempre que queramos.
//TODO

const fs = require('fs');

try {
  const data = fs.readFileSync('DATOS.DAT', 'utf8')
  console.log(data);
} catch (err) {
  console.error(err);
}

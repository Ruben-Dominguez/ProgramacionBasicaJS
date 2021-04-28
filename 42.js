// 42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.
//TODO

const fs = require('fs');

try {
  const data = fs.readFileSync('DATOS.DAT', 'utf8')
  console.log(data);
} catch (err) {
  console.error(err);
}

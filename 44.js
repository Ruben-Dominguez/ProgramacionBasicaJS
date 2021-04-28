// 44.- Con  el  archivo  DATOS.DAT  listar  todos  los  registros  cuyo  estado
// sea  uno  determinado  que introduciremos por teclado.
//TODO

const fs = require('fs');

try {
  const data = fs.readFileSync('DATOS.DAT', 'utf8')
  console.log(data);
} catch (err) {
  console.error(err);
}

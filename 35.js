// 35.- Generar  una  matriz  de  4  filas  y  5  columnas  con  números
//  aleatorios  entre  1  y  100,  e imprimirla.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let matrix = []

for(let i = 0; i<4; i++){
  matrix.push([]);
  for(let j = 0; j<5; j++){
    matrix[i].push(getRandomInt(1,101));
  }
}

let file = ""

for(let i = 0; i<4; i++){
  file = "";
  for(let j = 0; j<5; j++){
    file += matrix[i][j] + " ";
  }
  console.log(file);
}

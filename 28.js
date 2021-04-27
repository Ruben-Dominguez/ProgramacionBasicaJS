// 28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let moneda = getRandomInt(1, 3);

if(moneda == 1){
  console.log("Cara");
}
else {
  console.log("Cruz");
}

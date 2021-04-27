// 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let count = 0;

for(let i = 0; i<100; i++){
  let dado1 = getRandomInt(1, 7);
  let dado2 = getRandomInt(1, 7);
  console.log(`${dado1} + ${dado2} = ${dado1+dado2}`);

  if(dado1 + dado2 == 10){
    count++;
  }
}

console.log(`Las veces que salio un diez fue: ${count}`);

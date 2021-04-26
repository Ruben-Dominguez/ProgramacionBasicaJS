// 5.- Hacer  un  programa  que  imprima  los  números  impares  hasta  el  100  y  que  imprima  cuantos impares hay.

let count = 0
for(let i=1; i<=100; i++){
  if(i%2 == 1){
    console.log(i);
    count++;
  }
}
console.log(`El total de numeros impares hasta el 100 es: ${count}`);

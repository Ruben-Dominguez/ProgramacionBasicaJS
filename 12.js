// 12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los números pares por un lado, y por otro, la de todos los impares.

let sumaPares=0;
let sumaImpares=0;

for(let i=1; i<=100; i++){
  console.log(i);
  if(i%2 == 0){
    sumaPares+=i;
  }
  else{
    sumaImpares+=i;
  }
}

console.log(`La suma de los pares es: ${sumaPares}`);
console.log(`La suma de los impares es: ${sumaImpares}`);

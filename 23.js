// 23.-  Hacer  un  programa  que  imprima  los  números  del  0  al  100,
// controlando  las  filas  y  las columnas.

// profe en este no entendi muy bien la instruccion, asi que opte por utilizar
// algo nuevo para aprender, just for the fun of it

let nums = [];

for(let i = 0; i<10; i++){
  nums.push([]);
  for(let j = 0; j<10; j++){
    nums[i].push(i*10 +j);
  }
}
nums.push([100]);

console.table(nums);

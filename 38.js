// 38.- Ordenar  una  matriz  de  M  filas  y  N  columnas  por  la  primera
// columna  utilizando  el  método SHELL (por inserción).

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function input(pregunta){
  return new Promise((resolve, reject) => {
    readlineInterface.question(pregunta, resolve);
  });
}

function shellSort(arr) {
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];

			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}

	return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

main();

async function main(){
  let matrix = [];
  let m = await input("Introduce las filas: ");
  let n = await input("Introduce las columnas: ");

  for(let i = 0; i<n; i++){
    matrix.push([]);
    for(let j = 0; j<m; j++){
      matrix[i].push(getRandomInt(1,101));
    }
  }

  let file = ""

  console.log("Matriz Normal:")

  for(let i = 0; i<n; i++){
    file = "";
    for(let j = 0; j<m; j++){
      file += matrix[i][j] + " ";
    }
    console.log(file);
  }

  console.log("Matriz Ordenada por Fila (Priorizando la primera columna ig?):")

  let matrix2 = [];

  for(let i = 0; i<n; i++){
    file = "";
    matrix2.push(shellSort(matrix[i]));
    for(let j = 0; j<m; j++){
      file += matrix2[i][j] + " ";
    }
    console.log(file);
  }

  process.exit();
}

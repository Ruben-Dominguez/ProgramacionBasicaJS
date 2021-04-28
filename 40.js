// 40.- Una  empresa  guarda  las  ventas  realizadas  por  sus  tres
// representantes  a  lo  largo  de  doce meses de sus cuatro productos,
// VENTAS( representante, mes, producto ). Queremos proyectar el total de ventas,
// TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
// cada mes de todos los representantes. Imprimir toda la información.

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var final = [0, 0, 0, 0];

function input(pregunta){
  return new Promise((resolve, reject) => {
    readlineInterface.question(pregunta, resolve);
  });
}

function ventas(representante, mes, producto){
  let obj = {
    "representante": representante,
    "mes": mes,
    "producto": producto
  };
  return obj;
}

function total(base){
  base.forEach((item, i) => {
    console.log(item);
    final[parseInt(item["producto"]-1)]++;
  });

  console.log("DATOS:");
  final.forEach((item, i) => {
    console.log(`Producto #${i+1}: ${item}`);
  });

}

main();

async function main(){
  let base = [];
  let opcion = "";
  let representante = "";
  let mes = "";
  let producto = "";

  while(opcion != 3){

    console.log("\n(1) Ingresar info\n(2) Ver\n(3) Salir");
    opcion = await input("Opcion:");

    if(opcion == 1){
      representante = await input("Ingrese el representante: ");
      mes = await input("Ingrese el mes: ");
      producto = await input("Ingrese el producto(1-4): ");
      base.push(ventas(representante, mes, producto));
    }
    else if(opcion == 2){
      console.log("INFO COMPLETA");
      total(base);
    }

  }

  process.exit();
}

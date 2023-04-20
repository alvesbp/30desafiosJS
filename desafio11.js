// /*Escreva uma função que receba um par ordenado (x, y) e
// retorne um array de pares (x, y) onde cada um deles possui
// x e y menor ou igual ao par recebido em ordem crescente.
// Os pares devem ser ordenados de forma que primeiro
// aumente o valor de y e depois o valor de x.
// Apenas o quadrante onde x e y são positivos deve ser
// considerado.*/

// function cordenadas([x, y]) {
//   const resultado = [];
//   for (let i = 0; i <= x; i++) {
//     for (let j = 0; j <= y; j++) {
//       resultado.push([i, j]);
//     }
//   }
//   return resultado;
// }

// console.log(cordenadasGpt([2, 2]));

// function cordenadasGpt([x, y]) {
//   const resultado = [];
//   for (let i = 0; i <= x; i++) {
//     for (let j = 0; j <= y; j++) {
//       resultado[i + j] = [j, i];
//     }
//   }
//   return resultado;
// }

function cordenada([x, y]) {
  const arrPares = [];
  let contagem = 0;
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      arrPares[contagem] = [i, j];
      contagem++;
    }
  }
  return arrPares;
}

console.log(cordenada([2, 5]));

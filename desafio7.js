// Escreva uma função que receba uma array bidimensional e retorna um array contendo todos os números em ordem ascendente

function organizador(arrayB) {
  let arrayNovo = [];
  arrayB.forEach((array) => {
    arrayNovo = arrayNovo.concat(array);
  });
  return console.log(arrayNovo.sort((a, b) => a - b));
}

organizador([
  [1, 5, 3],
  [6, 19, 11],
  [47, 128, 5],
  [1, 93, 57, 42, 103],
]);

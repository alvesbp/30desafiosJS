/*Escreva uma função que recebe um número e retorna a sua
persistência multiplicativa, que é a quantidade de vezes que
é necessário multiplicar os seus algarismos para se chegar
em um número de um único algarismo.*/
// --- Minha função 1 -------

function persistenciaNum(num) {
  if (typeof num === 'number' && num >= 0) {
    let currentNum = num.toString().split('');
    let persistencia = 0;

    while (currentNum.length > 1) {
      persistencia++;
      currentNum = currentNum.reduce((accum, currentNum) => {
        return accum * +currentNum;
      }, 1);
      currentNum = currentNum.toString().split('');
    }
    return persistencia;
  } else {
    return 'Digite um número válido.';
  }
}
console.log(persistenciaNum(539));
console.log(persistenciaNum(999));
console.log(persistenciaNum(7));
console.log(persistenciaNum(7169));

// --- Utilizando recursividade ---

// function persistenciaRecursiva(num) {
//   if (num < 10) {
//     return 0;
//   }
//   const digits = num.toString().split('');
//   const product = digits.reduce((accum, current) => (accum *= current), 1);

//   return 1 + persistenciaRecursiva(product);
// }

// console.log(persistenciaRecursiva(539));
// console.log(persistenciaRecursiva(999));
// console.log(persistenciaRecursiva(7));
// console.log(persistenciaRecursiva(7169));

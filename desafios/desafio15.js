// ----- MINHA RESPOSTA ------
function tradutor(str) {
  const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const arrChar = str.split("");
  const arrNumber = arrChar.map((char) => numerosRomanos[char]);

  let resultado = 0;

  arrNumber.forEach((num, index, arr) => (num < arr[index + 1] ? (resultado += -num) : (resultado += num)));

  return resultado;
}

console.log(tradutor("MMMCMXCIX"));

// ------ RESPOSTA CORRETA ------
// function sumValues(accum, current, index, array) {
//   return current < array[index + 1] ? accum - current : accum + current;
// }

// function romanNumeral(str) {
//   const numeralsArray = str.split("");

//   const romanDecimalMap = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   const decimalsArray = numeralsArray.map((numeral) => romanDecimalMap[numeral]);

//   return decimalsArray.reduceRight(sumValues);
// }

// console.log(romanNumeral("MMMCMXCIX"));

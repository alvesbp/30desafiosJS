//FUNCAO RECURSIVA - Objetivo do exercicio é criar uma funcao que retorna a palavra "chunk" separada por "-" sem utilizar loops.

function chunks(n) {
  let chunk = [];

  if (chunk.length - 1 < n) {
    chunk.push("chunk");
    chunks(n);
  } else {
    const chunkResult = chunk.join("-");
  }
  console.log(chunkResult);
}

chunks(6);

// function chunks(n) {
//   if (n === 0) {
//     return "";
//   }
//   if (n == 1) {
//     return "chunk";
//   } else {
//     return "chunk-" + chunks(n - 1);
//   }
// }

console.log(chunks(4));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(2));

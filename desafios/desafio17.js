/*
- Escreva uma função que recebe três argumentos, uma frase,
 uma palavra e um array de índices. A função deve retornar 
 a frase com a palavra inserida em cada uma das posições 
 especificadas pelo array de índices.
- A função não deve funcionar em índices que não estejam no
 alcance da frase.
- A função deve retornar a mesma frase caso o array de índices
 esteja vazio.
*/

// --- MINHA RESPOSTA ---- //
function relatorio(phrase, word, arrIndices) {
  const charsArray = phrase.split('');
  let accum = 0;

  arrIndices.forEach((indice) => {
    if (indice <= phrase.length) {
      charsArray.splice(indice + accum, 0, word);
      accum++;
    }
  });
  return charsArray.join('');
}

console.log(relatorio('capaz utilizar as cápsulas emergência', 'de ', [6, 27]));
console.log(relatorio('Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para[...]', ',', [13, 45]));
console.log(relatorio('Isso é um teste', 'não', []));

// RESPOSTA DO PROFESSOR ---
function insertIntoString(str, toInsert, indexes) {
  const charsArray = str.split('');
  let insertCount = 0;

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + insertCount, 0, toInsert);
      insertCount++;
    }
  }
  return charsArray.join('');
}

console.log(insertIntoString('capaz utilizar as cápsulas emergência', 'de ', [6, 27]));
console.log(insertIntoString('Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para[...]', ',', [13, 45]));
console.log(insertIntoString('Isso é um teste', 'não', []));

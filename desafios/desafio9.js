// Faça uma função que receba uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe
// e retorna true caso possua ou false caso não possua.

function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true;
}

function checkBalance(str) {
  str = str.replace(/\s/g, "");

  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    charCount[letter] = charCount[letter] ? charCount[letter] + 1 : 1;
  }
  // verifica se a quantidade de cada letra é a mesma
  return Object.values(charCount).every(compareCounts);
}
console.log(checkBalance("aabbcc"));

//Objetivo é criar uma funcao que receba uma string e retorne a maior segundo a ordem alfabetica.
function maiorLetra(string) {
  return string.split("").sort()[string.length - 1];
}
console.log(maiorLetra("restesd"));

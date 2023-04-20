/*Escreva uma função que recebe um número e retorna o seu
fatorial sem utilizar nenhuma estrutura de repetição (while,
dowhile, for, etc).
O fatorial de um número é igual a multiplicação de todos os
inteiros positivos menores ou iguais a ele. Ela deve ser
capaz de retornar números inteiros corretos mesmo para
valores altos.*/

function factorial(n) {
  const bigNum = BigInt(n);
  if (n < 0) {
    return undefined;
  } else if (bigNum <= 1n) {
    return 1n;
  } else {
    return bigNum * factorial(bigNum - 1n);
  }
}

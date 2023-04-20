/* 1. Some os dígitos das posições pares 
2. Multiplique esse resultado por 3
3. Some os dígitos das posições ímpares do número original
 e então some esse resultado ao resultado do passo anterior.
4. Encontre o resto da divisão do resultado do passo anterior
por 10.
5. Se o resto da divisão for 0, o dígito verificador é 0, do
contrário o dígito verificador é 10 - resto  */

//Minha função
function verificacaoDigito(digito, rest) {
  if (rest === 0 && digito) {
    return true;
  } else {
    const dv = 10 - rest;
    if (digito === dv) {
      return true;
    } else {
      return false;
    }
  }
}

function verificador(num) {
  const numChar = num.toString().split("").map(Number);
  const digito = numChar.pop();
  let resultado = 0;
  let pares = 0;
  let impares = 0;

  numChar.forEach((char, index) => {
    if (index % 2 === 0) {
      pares += char;
    } else {
      impares += char;
    }
  });

  resultado = pares * 3;
  resultado += impares;
  const rest = resultado % 10;
  return verificacaoDigito(digito, rest);
}

console.log(verificador(259));

//Resposta
function calculateDigit(arr) {
  const step1 = arr.reduce((accum, current, index) => {
    return index === 0 || index % 2 === 0 ? accum + current : accum;
  }, 0);
  const step2 = step1 * 3;
  const step3 =
    step2 +
    arr.reduce((accum, current, index) => {
      return index % 2 !== 0 ? accum + current : accum;
    }, 0);

  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}

function checkVerificationDigit(num) {
  const numbersArray = num.toString().split("").map(Number);
  const numbersArrayWithoutDigit = numbersArray.slice(0, -1);
  const expectedDigit = calculateDigit(numbersArrayWithoutDigit);

  return expectedDigit === numbersArray[numbersArray.length - 1];
}

console.log(checkVerificationDigit(259));

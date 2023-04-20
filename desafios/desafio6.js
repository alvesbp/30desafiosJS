function invertendo(frase) {
  const palavrasArray = frase.split(" ");
  const arrPalavraInvertida = palavrasArray.map((palavra) => {
    return palavra.split("").reverse().join("");
  });
  const fraseResultado = arrPalavraInvertida.join(" ");
  console.log(fraseResultado);
}

invertendo("ola teste outra vez");

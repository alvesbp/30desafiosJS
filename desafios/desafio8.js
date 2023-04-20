/* Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras maiúsculas antes das abreviações separado por vírgula.*/

// function abreviando(string) {
//   const arrayNomes = string.split(" ");
//   const comprimento = arrayNomes.length - 1;
//   const nomesInvertidos = [];
//   let nomeFinal;
//   arrayNomes.forEach((nome, index) => {
//     if (index === comprimento) {
//       nomesInvertidos.unshift(nome.toUpperCase() + ",");
//       nomeFinal = nomesInvertidos.join(" ");
//     } else {
//       nomesInvertidos[index] = nome[0] + ".";
//     }
//   });

//   console.log(nomeFinal);
// }

// RESPOSTA :

function quotation(fullName) {
  const names = fullName.split(" ");
  let initials = "";
  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0].toUpperCase()}.`;
  }
  return `${names[names.length - 1].toUpperCase()},${initials}`;
}

console.log(quotation("Isaac Larrubia Ferreira Pontes"));

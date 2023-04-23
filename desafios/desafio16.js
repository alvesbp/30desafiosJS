//      --- MINHA RESPOSTA ---

function codigoRomano(str, num) {
  const arrAlfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const arrStr = str.split('');
  let resposta = '';

  arrStr.forEach((char) => {
    if (char === ' ') {
      resposta += ' ';
    } else {
      const charMin = char.toLowerCase();
      let newIndex = arrAlfa.findIndex((item) => item === charMin) - num;

      while (newIndex < 0) {
        newIndex += 26;
      }

      resposta += char === charMin ? arrAlfa[newIndex] : arrAlfa[newIndex].toUpperCase();
    }
  });

  return resposta;
}

console.log(codigoRomano('Vguvg', 2));
console.log(codigoRomano('BCDYZAbcdyza', 27));

// ---- RESPOSTA DO PROFESSOR ----
// function decipher(str, key) {
//   const charsArray = str.split('');
//   const normalizedKey = key % 26;

//   const codesArray = charsArray.map((char) => {
//     const currentCode = char.charCodeAt(0);
//     if (currentCode >= 65 && currentCode <= 90 && currentCode - normalizedKey < 65) {
//       return currentCode + 26;
//     }
//     if (currentCode >= 97 && currentCode <= 122 && currentCode - normalizedKey < 97) {
//       return currentCode + 26;
//     }
//     return currentCode;
//   });
//   return codesArray.map((code) => String.fromCharCode(code - normalizedKey)).join('');
// }

// console.log(decipher('Vguvg', 2));
// console.log(decipher('BCDYZAbcdyza', 27));

function square(num) {
  const digitsArray = num
    .toString()
    .split("")
    .map((digit) => Number(digit) ** 2)
    .join("");
  return Number(digitsArray);
}
console.log(square(88));
// function square(num) {
//   const str = num.toString();
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += Math.pow(Number(str[i]), 2).toString();
//   }
//   return Number(result);
// }

// console.log(square(55));

/*Escreva uma função que receba um valor inteiro e retorne
a quantidade de cada moeda para se chegar ao valor.
Deve-se sempre priorizar as moedas de maior valor
(o máximo possível de moedas de 500, depois o máximo
possível de moedas de 100, etc).*/

// function coins(num) {
//   const coins = {
//     "500":0,
//     "100":0,
//     "25":0,
//     "10":0,
//     "5":0,
//     "1":0
//   };
//   let rest = num;
  
//   coins['500'] = Math.floor(rest / 500);
//   rest -= 500 * Math.floor(rest / 500);
  
//   coins['100'] = Math.floor(rest / 100);
//   rest -= 100 * Math.floor(rest / 100);
  
//   coins['25'] = Math.floor(rest / 25);
//   rest -= 25 * Math.floor(rest / 25);
  
//   coins['10'] = Math.floor(rest / 10);
//   rest -= 10 * Math.floor(rest / 10);
  
//   coins['5'] = Math.floor(rest / 5);
//   rest -= 5 * Math.floor(rest / 5);
  
//   coins['1'] = Math.floor(rest / 1);
//   rest -= 1 * Math.floor(rest / 1);
  
//   return console.log(coins);
// }

// coins(6000);


//funcao simplicada
function coins(num) {
  const coinValues = [500, 100, 25, 10, 5, 1];
  const coinCounts = {};
  let rest = num;

  for (const value of coinValues) {
    coinCounts[value] = Math.floor(rest / value);
    rest -= value * coinCounts[value];
  }

  console.log(coinCounts);
}
coins(1000);
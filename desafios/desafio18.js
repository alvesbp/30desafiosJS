// class Equacao {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.delta = 0;
//     this.x1 = 0;
//     this.x2 = 0;
//     this.raizDelta = 0;
//   }

//   deltaCalculo() {
//     this.delta = Math.pow(this.b, 2) - 4 * this.a * this.c;
//     this.bask();
//   }

//   bask() {
//     this.raizDelta = Math.sqrt(this.delta);
//     if (this.raizDelta) {
//       const dividir = 2 * this.a;
//       this.x1 = (-this.b + this.raizDelta) / dividir;
//       this.x2 = (-this.b - this.raizDelta) / dividir;
//     } else {
//       return console.log('Nenhuma raiz real.');
//     }
//   }

//   resultado() {
//     const resultado = `1. Delta = ${this.b}² - 4 * ${this.a} * ${this.c}
// 2. Delta = ${this.delta}
// 3. x' = -(${this.b}) + raiz ${this.delta} / 2 * ${this.a}
// 4. x" = -(${this.b}) - raiz ${this.delta} / 2 * ${this.a}
// 5. x' = ${-this.b} + ${this.raizDelta} / ${2 * this.a}
// 6. x" = ${-this.b} - ${this.raizDelta} / ${2 * this.a}
// 7. x' = ${-this.b + this.raizDelta} / ${2 * this.a}
// 8. x" = ${-this.b - this.raizDelta} / ${2 * this.a}
// 9. x' = ${this.x1}
// 10. x" = ${this.x2}`;
//     return resultado;
//   }

//   init() {
//     this.deltaCalculo();
//     return this;
//   }
// }

// const equacao = new Equacao(1, -4, -5);
// console.log(equacao.init().resultado());

// --- RESPOSTA ---

class Equation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getRoots() {
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return 'Erro! Nenhum parâmetro informado.';
    }
    if (this.a === 0 && this.b === 0) {
      console.log('1. Parâmetros insuficientes.\nNenhuma raiz.');
      return [];
    }
    if (this.a === 0) {
      console.log(`1. ${this.b}x + ${this.c} = 0`);
      console.log(`2. ${this.b}x = ${this.c * -1} `);
      console.log(`3. x = ${this.c * -1} / ${this.b}`);
      console.log(`4. x = ${(this.c * -1) / this.b}`);
      return [(this.c * -1) / this.b];
    }
    const delta = this.b ** 2 - 4 * this.a * this.c;
    console.log(`1. △ = ${this.b}² - 4 * ${this.a} * ${this.c}`);
    console.log(`2. △ = ${delta}`);

    if (delta < 0) {
      console.log('△ < 0\nNenhuma raiz.');

      return [];
    }

    console.log(`3. x' = (-(${this.b}) + √${delta}) / 2 * ${this.a}`);
    console.log(`4. x" = (-(${this.b}) - √${delta}) / 2 * ${this.a}`);
    console.log(`5. x' = (${this.b * -1} + √${delta}) / ${2 * this.a}`);
    console.log(`6. x" = (${this.b * -1} - √${delta}) / ${2 * this.a}`);

    const x1 = (-this.b + Math.sqrt(delta)) / (this.a * 2);
    const x2 = (-this.b - Math.sqrt(delta)) / (this.a * 2);

    if (Number.isInteger(Math.sqrt(delta))) {
      console.log(`7. x' = (${this.b * -1} + ${Math.sqrt(delta)}) / ${2 * this.a}`);
      console.log(`8. x" = (${this.b * -1} - ${Math.sqrt(delta)}) / ${2 * this.a}`);
      console.log(`9. x' = ${x1}`);
      console.log(`10. x" = ${x2}`);
    }
    return x1 === x2 ? [x1] : [x1, x2];
  }
}

const eq1 = new Equation(0, 2, 6);
const eq2 = new Equation();
const eq3 = new Equation(0, 0, 5);
const eq4 = new Equation(1, -4, -5);

console.log(eq1.getRoots());
console.log(eq2.getRoots());
console.log(eq3.getRoots());
console.log(eq4.getRoots());

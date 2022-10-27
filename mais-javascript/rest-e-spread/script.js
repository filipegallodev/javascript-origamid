// function perimetroForma(lado, totalLados = 4) {
//   console.log(arguments);
//   const argArray = Array.from(arguments);
//   console.log(argArray);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 5));
// console.log(perimetroForma(10));

// function perimetroForma(...listaArgumentos) {
//   console.log(arguments);
//   console.log(listaArgumentos);
//   listaArgumentos.forEach((item) => {
//     console.log(item);
//   });
// }

// console.log(perimetroForma(10, 20, 30, "Oi", "Teste"));

// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(arguments);
//   console.log(listaArgumentos);
//   listaArgumentos.forEach((item) => {
//     console.log(item);
//   });
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20, 30, "Oi", "Teste"));

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach((ganhador) => {
//     console.log(`${ganhador} ganhou ${premio}!`);
//   });
// }

// anunciarGanhadores("R$ 100.000,00", "João", "Mariana", "Pedro");

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach((ganhador) => {
//     console.log(`${ganhador} ganhou ${premio}!`);
//   });
// }

// const premio = "R$ 100.000,00";
// const ganhadores = ["João", "Mariana", "Mario", "Ana", "José"];

// anunciarGanhadores(premio, ...ganhadores);

// const frutas = ["Banana", "Uva", "Morango"];
// const legumes = ["Cenoura", "Alface"];
// const comidas = [...frutas, "Arroz", ...legumes];
// console.log(comidas);

// const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
// const numeroMaximoSpread = Math.max(...listaNumeros);
// console.log(numeroMaximoSpread);

// const btns = document.querySelectorAll("button");
// const btnsArray = Array.from(btns);
// const btnsArray = [...btns];

// console.log(btns);
// console.log(btnsArray);

console.log("- Exercícios -");
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();
const greenButton = createButton("green", "white");
console.log(redButton);
console.log(greenButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(...frutas);
console.log(comidas);

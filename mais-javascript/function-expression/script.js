// function somar(a, b) {
//   return a + b;
// }
// console.log(somar(6, 3));

// const dividir = function (a, b) {
//   return a / b;
// };
// console.log(dividir(10, 2));

// const multiplicar = (a, b) => a * b;
// console.log(multiplicar(5, 7));

console.log("- Exercícios -");
// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const aviao = "Mig-29";

(() => {
  const aviao = "F-14";
  console.log(aviao);
})();

console.log(aviao);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("Função ativa");
});

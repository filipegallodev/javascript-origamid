// const pessoa = new Object({
//   nome: "Filipe",
// });

// console.log(pessoa);

// const carros = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carros).init("Honda");
// console.log(honda.acelerar());

// const ferrari = Object.create(carros).init("Ferrari");
// console.log(ferrari.acelerar());

// const carro = {
//   rodas: 4,
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// const funcaoAutomovel = {
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.assign(carro, funcaoAutomovel);
// console.log(honda.rodas);

// const ferrari = Object.assign(moto, funcaoAutomovel);
// console.log(ferrari.rodas);

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false,
//     writable: false,
//     enumerable: false
//   },
//   velocidade: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor;
//     },
//   },
// });

// console.log(moto);

// moto.velocidade = 120;

// console.log(moto.velocidade);

// console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyDescriptors(moto));
// console.log(Object.getOwnPropertyDescriptor(window, "innerHeight"));

// console.log(Object.keys(moto));
// console.log(Object.values(moto));
// console.log(Object.entries(moto));

// console.log(Object.getOwnPropertyNames(Array));

// const frutas = ["Banana"];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf(""));

// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// const novaFruta = frutas1;

// console.log(Object.is(frutas1, frutas2));
// console.log(Object.is(frutas1, novaFruta));

// const carro = {
//   marca: "Honda",
//   portas: 4,
// };

// Object.freeze(carro);

// carro.marca = "McLaren";

// console.log(carro.marca);
// console.log(Object.isFrozen(carro));

// const frutas = ["Banana", "Melancia"];

// console.log(frutas.constructor);

// console.log(frutas.hasOwnProperty("map"));
// console.log(Array.prototype.hasOwnProperty("map"));
// console.log(Object.getOwnPropertyNames(frutas));

// const somar = function () {
//   return a + b;
// };

// const carro = {
//   marca: "Ola",
// };

// console.log(frutas.toString());
// console.log(somar.toString());
// console.log(carro.toString());

// console.log(Array.isArray(frutas));
// console.log(Array.isArray(somar));
// console.log(Array.isArray(carro));

// console.log(Object.prototype.toString.call(frutas));
// console.log(Object.prototype.toString.call(somar));
// console.log(Object.prototype.toString.call(carro));

console.log("- Exercícios -");
// Crie uma função que verifique
// corretamente o tipo de dado
function verificaTipoDeDado(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificaTipoDeDado(""));
console.log(verificaTipoDeDado(2));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
});
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

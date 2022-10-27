// const carro = {
//   marca: "Honda",
//   ano: "2019",
// };

// const { marca, ano } = carro;

// console.log(marca);
// console.log(ano);

// const cliente = {
//   nome: "Filipe",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Vídeo JS", "Vídeo HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// console.log("---");

// const { livros, videos } = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos },
// } = cliente.compras;

// console.log(digitais);
// console.log(fisicas);
// console.log(livros);
// console.log(videos);

// const cliente = {
//   nome: "Filipe",
//   compras: 10,
// };

// const {
//   nome: nomeCliente,
//   compras: comprasCliente,
//   email = "filipe@gmail.com",
//   cpf,
// } = cliente;

// console.log(nomeCliente, comprasCliente, email, cpf);

// const frutas = ["Banana", "Uva", "Morango"];

// const primeiraFruta = frutas[0];
// const segundaFruta = frutas[1];
// const terceiraFruta = frutas[2];
// console.log(primeiraFruta, segundaFruta, terceiraFruta);

// const [primeira, segunda, terceira] = frutas;
// console.log(primeira, segunda, terceira);

// const variavel1 = "Item 1";
// const variavel2 = "Item 2";
// const variavel3 = "Item 3";
// ou
// const [variavel4, variavel5, variavel6] = ["Item 4", "Item 5", "Item 6"];

// function handleKeyboardX(event) {
//   console.log(event.key);
// }

// function handleKeyboard({ key, keyCode }) {
//   console.log(key, keyCode);
// }

// document.addEventListener("keyup", handleKeyboard);

console.log("- Exercícios -");
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;

console.log(backgroundColor);
console.log(color);
console.log(margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";
console.log(cursoAtivo, cursoInativo);

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { cor: bobCor } = cachorro;
console.log(bobCor);

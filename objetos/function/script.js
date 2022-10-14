// const perimetro = new Function("lado", "return lado * 4");

// console.log(perimetro(5));

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.length);
// console.log(somar.name);

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro() {
//   console.log(`${this.marca} ${this.ano}`);
// }

// descricaoCarro();
// descricaoCarro(carro);
// descricaoCarro.call();
// descricaoCarro.call(carro);

// const carros = ["Ford", "Fiat", "Honda"];
// const frutas = ["Banana", "Uva", "Pera"];

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativo");

// const ul = new Dom("ul");

// ul.ativo.call(li, "ativo");

// console.log(ul);

// const frutas = ["Banana", "Uva", "Pera"];

// Array.prototype.pop.call(frutas);

// console.log(frutas);

// const arrayLike = {
//   0: "Item 1",
//   2: "Item 2",
//   3: "Item 3",
//   length: 3,
// };

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains("ativo");
// });

// const arrayLi = Array.from(li);

// const filtro = arrayLi.filter( (item) => {
//   return item.classList.contains("ativo");
// });

// console.log(filtro);
// console.log(li);

// const numeros = [23, 54, 234, 6346, 1231, 123, 5345, 32];

// console.log(Math.max(...numeros));
// console.log(Math.max.apply(null, numeros));

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.bind(li, (item) => {
//   return item.classList.contains("ativo");
// });

// console.log(filtro);
// console.log(filtro());

// const $ = document.querySelectorAll.bind(document);

console.log("- Exercícios -");
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const caracteresTotal = Array.prototype.reduce.call(
  paragrafos,
  (total, item) => {
    return total + item.innerText.length;
  },
  0
);

console.log(caracteresTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarElemento("div", "ativo", "ola"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");

const cursosHtml = h1Titulo("Cursos de HTML");
const cursosJs = h1Titulo("Cursos de JavaScript");

console.log(h1Titulo("Título da página!"));
console.log(cursosHtml);
console.log(cursosJs);

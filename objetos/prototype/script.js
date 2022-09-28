// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     console.log(this.nome + ' abraçou');
//   }
//   this.andar = function () {
//     console.log(this.nome + ' andou pelo objeto');
//   }
// }

// Pessoa.prototype.andar = function () {
//   console.log(this.nome + ' andou');
// }

// Pessoa.prototype.nadar = function () {
//   console.log(this.nome + ' nadou');
// }

// const filipe = new Pessoa('Filipe', 22);

// console.log(Pessoa.prototype);
// console.log(filipe.prototype);

// filipe.andar();
// filipe.nadar();
// filipe.abracar();

// const pais = 'Alemanha';
// const cidade = new String('Berlim');

// console.log(pais.charAt(0));
// console.log(cidade.charAt(0));

// const lista = document.querySelectorAll('li');

// Transforma em uma array
// const listaArray = Array.prototype.slice.call(lista);

// Nova forma de tranformar em array
// const listaArray = Array.from(lista);

// console.log(lista, listaArray);

// const Carro = {
//   marca: 'Honda',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

// console.log(typeof Carro.marca);
// console.log(typeof Carro.preco);
// console.log(typeof Carro.andar);





console.log('- Exercícios -');
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
}

const filipe = new Pessoa('Filipe', 'Gallo', 22);

console.log(filipe.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
// console.log(li.click().constructor.name);

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name);

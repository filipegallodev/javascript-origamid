// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   }
// }

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   }
//   this.ativar = function (classe) {
//     this.element().classList.add(classe);
//   }
// }

// const li = new Dom('li');
// li.ativar('ativo');

// const ul = new Dom('ul');
// ul.ativar('ativo');

// const lastLi = new Dom('li:last-child');
// lastLi.ativar('ativo');




console.log('- Exercícios -');
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  }
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}

const listaItens = new Dom('li');
listaItens.addClass('ativo');
listaItens.removeClass('ativo');

const ul = new Dom('ul');

ul.addClass('ativar-ul');
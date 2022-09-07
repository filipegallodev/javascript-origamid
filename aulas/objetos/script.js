var pessoa = {
  nome: 'Filipe',
  idade: 22,
  profissao: 'Desenvolvedor Full-Stack'
}

console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.round(Math.random(10) * 10));

// var height = 100;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = '#00F';

menu.esconder = function () {
  console.log("Escondi");
}

var bg = menu.backgroundColor;

console.log(menu.metadeHeight());



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Filipe',
  sobrenome: 'Gallo',
  idade: 22,
  profissao: "Desenvolvedor Full-Stack",
  mostrarNome() {
    return console.log(`${this.nome} ${this.sobrenome}`);
  }
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.mostrarNome();


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa == 'homem') {
      return 'Latir';
    }
    else {
      return 'Nada';
    }
  }
}

console.log(cachorro.latir('homem'));
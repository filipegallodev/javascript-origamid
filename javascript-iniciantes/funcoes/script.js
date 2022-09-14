// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  if (!!valor) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isTruthy(5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somarPerimetro(ladoQuadrado) {
  return ladoQuadrado * 4;
}

console.log(somarPerimetro(10))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function juntarNome(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

var nomeCompleto = juntarNome('Filipe', 'Gallo');
console.log(nomeCompleto);

// Crie uma função que verifica se um número é par
function verificaParImpar(numero) {
  if (numero % 2 == 0) {
    return 'Par';
  }
  else {
    return 'Ímpar';
  }
}

console.log(verificaParImpar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
  return typeof valor;
}

console.log(tipoDeDado('Ola'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function () {
  console.log(nomeCompleto);
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

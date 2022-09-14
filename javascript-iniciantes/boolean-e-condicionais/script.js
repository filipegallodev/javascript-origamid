// Verifique se a sua idade é maior do que a de algum parente
var idadeFilipe = 22;
var idadeBianca = 25;

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (idadeFilipe > idadeBianca) {
  console.log("É maior");
}
else if (idadeFilipe < idadeBianca) {
  console.log("É menor");
}
else {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(brasil == china);

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
}
else {
  console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
}
else {
  console.log('Falso');
}
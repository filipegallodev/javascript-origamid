var numero = 20;

numero *= 10;
console.log(numero)


var idade = 22;
var temDinheiro = true;

var podeBeber = (idade >= 18 && temDinheiro) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);


var possuiFaculdade = true;

if (possuiFaculdade)
  console.log('Sim, possui')
else
  console.log('Não possui')
//




// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa);

console.log(darCredito)
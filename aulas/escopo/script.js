function mostrarCarro() {
  var carro = 'Camaro';
  console.log(carro)
}
mostrarCarro();
// console.log(carro) não vai funcionar por causa do escopo


if (10 == 10) {
  var animal = 'Cachorro';
  console.log(animal)
}
console.log(animal)


if (10 == 10) {
  let gato = 'Preto';
  console.log(gato)
}
// console.log(gato) não vai funcionar por causa do escopo do let


let cachorro = 'Caramelo';
if (10 == 10) {
  console.log(cachorro)
}
console.log(cachorro)


for (var i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i)


for (let j = 0; j < 5; j++) {
  console.log(j)
}
// console.log(j) não vai funcionar por causa do escopo


const semana = 'Sexta';
console.log(semana)


const data = {
  dia: 22,
  mes: 'Setembro',
  ano: 2022
}

data.ano = 2023 // quando é objeto é possível modificar as propriedades
console.log(data.ano)



// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
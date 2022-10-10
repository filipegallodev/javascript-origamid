// const numero = 500.25428;

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN("Texto qualquer"));
// console.log(Number.isInteger(numero));
// console.log(Number.isInteger(5.2));

// console.log("---");
// console.log(parseFloat("99.50"));
// console.log(Number.parseFloat("99.50"));
// console.log(Number.parseFloat("$ 99.50"));
// console.log(Number.parseFloat("100.70 reais"));
// console.log(Number.parseInt("100.75 reais"));
// console.log(Number.parseInt(100.75));

// console.log(numero.toFixed());
// console.log(numero.toFixed(2));
// console.log(+numero.toFixed(4));

// console.log(numero.toString());

// const preco = 59.99;

// console.log(
//   preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
// );
// console.log(
//   preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
// );
// console.log(
//   preco.toLocaleString("en-GB", { style: "currency", currency: "EUR" })
// );

// console.log(Math.PI);
// console.log(Math.LN10);

// console.log(Math.abs(-5.5));
// console.log(Math.ceil(4.8334));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8334));
// console.log(Math.floor(4.3));
// console.log(Math.round(4.8334));
// console.log(Math.round(4.3));

// console.log(Math.max(5, 2, 3, 10));
// console.log(Math.min(5, 2, 3, 10));

// console.log(Math.round(Math.random() * 100));

// Número entre 75 e 100
// console.log(Math.round(Math.random() * 25) + 75);

console.log("- Exercícios - ");
// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.round(Math.random() * 950) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = Number.parseFloat(preco).toFixed(2);
  return preco;
}

let somaTotal = 0;
listaPrecos.forEach((preco) => {
  preco = limparPreco(preco);
  somaTotal += Number.parseFloat(preco);
});

console.log(
  `Soma total: ${somaTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);

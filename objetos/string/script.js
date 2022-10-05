// const comida = "Pizza";
// const agua = new String("Agua");
// console.log(comida.length, agua.length);
// console.log(comida[0], agua[0]);

// const frase = "A melhor comida";
// console.log(frase[frase.length - 1]);

// const frase = "A melhor linguagem é ";
// const linguagem = "JavaScript";

// console.log(frase.concat(linguagem, ".", " É isso."));

// const fruta = "Banana";
// const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta));
// console.log(fruta.includes(listaFrutas));

// console.log("---");
// console.log(fruta.endsWith("na"));
// console.log(fruta.startsWith("Ba"));
// console.log(fruta.startsWith("Bane"));

// const transacao1 = "Depósito de cliente";
// const transacao2 = "Depósito de fornecedor";
// const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 3));
// console.log(transacao2.slice(0, 3));
// console.log(transacao3.slice(0, 3));

// console.log(transacao1.slice(12));
// console.log(transacao1.slice(-4));
// console.log(transacao1.slice(3, 6));

// console.log(fruta.indexOf("n"));
// console.log(fruta.lastIndexOf("n"));

// const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

// listaPrecos.forEach((item) => {
//   console.log(item.padStart(10, "."));
// });
// console.log(listaPrecos[0].padEnd(10, "."));

// const frase2 = "Ta";

// console.log(frase2.repeat(5));

// let preco = "R$ 1200,43";
// preco = preco.replace(",", ".");
// console.log(preco);

// const listaLinguagens = "HTML5 CSS3 JavaScript React.Js";

// const arrayListaLinguagens = listaLinguagens.split(" ");
// console.log(arrayListaLinguagens);

// const juntandoArrayListaLinguagens = arrayListaLinguagens.join(", ");
// console.log(juntandoArrayListaLinguagens);

// const stringComEspaco = "  Microsoft ";
// console.log(stringComEspaco);
// console.log(stringComEspaco.trim());

console.log("- Exercícios -");
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const valorLimpo = +item.valor.slice(3);
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += valorLimpo;
  } else {
    recebimentoTotal += valorLimpo;
  }
});
console.log(`Soma total das taxas: ${taxaTotal}`);
console.log(`Soma total dos recebimentos: ${recebimentoTotal}`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(frase.length - 1));
console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim();
  item = item.charAt(0).toUpperCase() + item.slice(1);
  if (item.slice(0, 4).includes("Taxa")) {
    totalTaxas++;
  }
  console.log(item);
});
console.log(`Total de taxas: ${totalTaxas}`);

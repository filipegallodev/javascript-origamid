// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
//   array[index] = item + " vendido";
// });

// console.log(carros);

// const newCarros = carros.map((item) => {
//   return "Carro " + item;
// });

// console.log(newCarros);

// const numeros = [2, 4, 5, 6, 78];
// const numerosMultiplicados = numeros.map((num) => {
//   return num * 2;
// });

// console.log(numerosMultiplicados);

// const aulas = [
//   {
//     nome: "HTML",
//     min: 15,
//   },
//   {
//     nome: "JavaScript",
//     min: 40,
//   },
//   {
//     nome: "CSS",
//     min: 25,
//   },
//   {
//     nome: "React",
//     min: 30,
//   },
// ];

// const tempoAulas = aulas.map((aula) => {
//   return aula.min;
// });

// console.log(tempoAulas);

// function juntaNomeAulas(aula) {
//   return aula.nome;
// }

// const nomeAulas = aulas.map((aula) => juntaNomeAulas(aula));

// console.log(nomeAulas);

// const tempoAulasTotal = aulas.reduce((total, aula) => {
//   return total + aula.min;
// }, 0);
// ^ o acumulador (total) deve ser iniciado no final

// console.log(tempoAulasTotal);

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, []);

// console.log(listaAulas);

// const listaAulasLeft = aulas.reduce((acumulador, aula) => {
//   return acumulador + " " + aula.nome;
// }, []);

// console.log(listaAulasLeft);

// const listaAulasRight = aulas.reduceRight((acumulador, aula) => {
//   return acumulador + " " + aula.nome;
// }, []);

// console.log(listaAulasRight);

// const frutas = ["Banana", "Pera", "Melância", "Uva"];

// const temUva = frutas.some((fruta) => {
//   return fruta === "Uva";
// });

// const every = frutas.every((fruta) => {
//   return fruta === "Uva";
// });

// console.log(temUva);

// console.log(every);

// console.log(frutas.includes("Maçã"));

// const frutas = ["Banana", "Pera", "Melância", "Uva"];

// const indexUva = frutas.findIndex((fruta) => {
//   return fruta === "Uva";
// });

// console.log(indexUva);
// console.log(frutas.indexOf("Pera"));

// const findUva = frutas.find((fruta) => {
//   return fruta === "Uva";
// });

// console.log(findUva);
// console.log(frutas.includes("Uva"));

// const numeros = [6, 23, 46, 82, 10, 29];

// const maiorQue25 = numeros.filter((numero) => {
//   return numero > 25;
// });

// console.log(maiorQue25);

// const frutas = ["Banana", 0, "", "Pera", undefined, "Melância", null, "Uva"];

// const limpaArrayFrutas = frutas.filter((fruta) => {
//   return fruta;
// });

// console.log(limpaArrayFrutas);

console.log("- Exercícios -");
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");

const cursosArray = Array.from(cursos);

const objetosCurso = cursosArray.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
  // return {
  //   titulo: titulo,
  //   descricao: descricao,
  //   aulas: aulas,
  //   horas: horas,
  // };
});
console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numero) => {
  return numero > 100;
});
console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const temBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorComprasTotal = compras.reduce((total, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return total + precoLimpo;
}, 0);
console.log(valorComprasTotal);

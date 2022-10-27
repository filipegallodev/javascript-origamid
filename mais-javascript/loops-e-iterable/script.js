// const frutas = ["Banana", "Morango", "Uva"];

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// const frase = "Isso é JavaScript";

// for (const char of frase) {
//   console.log(char);
// }

// const buttons = document.querySelectorAll("button");

// for (const btn of buttons) {
//   btn.style.color = "blue";
// }

// console.log(...buttons)

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) => {
//   console.log(headers);
// });

// const carro = {
//   marca: "Honda",
//   ano: 2019,
// };

// Object.defineProperties(carro, {
//   rodas: {
//     value: 4,
//     enumerable: true,
//   },
// });

// for (const key in carro) {
//   console.log(carro[key]);
// }

// const frutas = ["Banana", "Morango", "Uva"];

// for (const fruta in frutas) {
//   console.log(frutas[fruta]);
// }

// const btnUnico = document.querySelector("button");
// const btnStyles = getComputedStyle(btnUnico);

// for (const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

// let i = 10;
// do {
//   console.log(i++);
// } while (i <= 5);

console.log("- Exercícios -");
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const liNodeList = document.querySelectorAll("li");

for (const li of liNodeList) {
  li.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}

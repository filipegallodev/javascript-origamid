// function espera(texto) {
//   console.log('Passou 1s');
// }

// setTimeout(() => {
//   console.log("Testando");
// }, 1000);

// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   this.classList.add("ativo");
//   console.log(this);

//   setTimeout(function () {
//     console.log(this);
//   }, 1000);

//   setTimeout(() => {
//     console.log(this);
//   }, 1000);
// }

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, "Passou 1s");

// let i = 0;
// setInterval(() => {
//   console.log(`Passou ${i++}s`);
// }, 1000);

// const contarAte10 = setInterval(callback, 1000);

// let i = 0;
// function callback() {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }

console.log("- Exercícios -");
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse() {
//   document.body.classList.toggle("ativo");
// }

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector("[data-cronometro='iniciar']");
const pausar = document.querySelector("[data-cronometro='pausar-resetar']");
const tempo = document.querySelector("[data-tempo]");

// iniciar.addEventListener("click", () => {
//   const startTimer = setInterval(callback, 1000);
//   handlePause(startTimer);
// });

// let i = 0;
// function callback() {
//   tempo.innerText = i++;
// }

// function handlePause(startTimer) {
//   ["dblclick", "click"].forEach((userEvent) => {
//     pausar.addEventListener(userEvent, () => {
//       if (userEvent === "dblclick") {
//         tempo.innerText = "";
//         i = 0;
//       } else {
//         clearInterval(startTimer);
//       }
//     });
//   });
// }

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("click", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 1000);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

function resetarTempo() {
  i = 0;
  tempo.innerText = i;
}

// fetch("./doc.txt")
//   .then((response) => response.text())
//   .then((data) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = data;
//   });

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((response) => response.json())
//   .then((data) => {
//     const cep = document.querySelector(".cep");
//     cep.innerText = `\nCEP: ${data.cep}`;
//     cep.innerText += `\nLogradouro: ${data.logradouro}`;
//   });

// fetch("./style.css")
//   .then((response) => response.text())
//   .then((data) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = data;
//     conteudo.appendChild(style);
//   });

// const div = document.createElement("div");

// fetch("./sobre.html")
//   .then((response) => response.text())
//   .then((data) => {
//     div.innerHTML = data;
//     const titulo = div.querySelector("h1");
//     document.querySelector("h1").innerText = titulo.innerText;
//   });

// fetch("./imagem.png")
//   .then((response) => response.blob())
//   .then((data) => {
//     const blobUrl = URL.createObjectURL(data);
//     const imagemDom = document.querySelector("img");
//     imagemDom.src = blobUrl;
//   });

// fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
//   console.log(response.status);
//   console.log(response.type);
//   response.headers.forEach(console.log);
// });

// fetch("./nao-existe.txt").then((response) => {
//   console.log(response.status);
//   console.log(response.type);
//   console.log(response.url);
//   if (response.status === 404) {
//     console.log("Página não existe.");
//   }
// });

console.log("- Exercícios -");
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const buscar = document.querySelector(".buscar");
const endereco = document.querySelector(".endereco");

buscar.addEventListener("click", handleChange);

function handleChange(event) {
  event.preventDefault();

  const CEP = document.querySelector("#cep").value;

  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then((response) => response.json())
    .then((data) => {
      showAddress(data);
    });
}

function showAddress(data) {
  endereco.innerText = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s
const bitcoinEmReais = document.querySelector(".bitcoin");

setInterval(getBitcoinValue, 30000);

function getBitcoinValue() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((data) => {
      const valorFormatado = data.BRL.last.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      bitcoinEmReais.innerText = valorFormatado;
    });
}

getBitcoinValue();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadas = document.querySelector(".piadas");
const proxima = document.querySelector(".proxima");

proxima.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      piadas.innerText = data.value;
    });
}

getJoke();

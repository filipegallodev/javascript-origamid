fetch("./dados.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      console.log(item.aula);
    });
  });

fetch("./dados.json")
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
    const dataJson = JSON.parse(data);
    console.log(dataJson);
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(configuracoes);
console.log(localStorage.config);
console.log(JSON.parse(localStorage.config));

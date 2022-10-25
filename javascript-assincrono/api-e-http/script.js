// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.results[0]);
//   });

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: '{"title": "JavaScript", "body": "Linguagem de programação."}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

const url2 = "https://jsonplaceholder.typicode.com/posts/25";
const options2 = {
  method: "PUT",
  body: '{"title": "HTML5", "body": "Linguagem de marcação de texto."}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url2, options2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

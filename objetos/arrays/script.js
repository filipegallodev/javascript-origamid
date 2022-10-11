// const carros = new Array("Ford", "Fiat", "Honda");

// carros[1] = "Ferrari";
// carros[3] = "Kia";

// console.log(carros);

// const li = document.querySelectorAll("li");

// console.log(li);
// console.log(Array.from(li));

// console.log(Array(1, 2, 3, 4, 5));
// console.log(Array.of("Teste"));

console.log("- Exercícios -");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas);

const primeiraComida = comidas.shift();
console.log(comidas, primeiraComida);

const ultimaComida = comidas.pop();
console.log(comidas, ultimaComida);

comidas.push("Arroz");
console.log(comidas);

comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log("---");
console.log(estudantes);

estudantes.sort();
console.log(estudantes);

estudantes.reverse();
console.log(estudantes);

console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
const newHtml = html.split("section").join("ul").split("div").join("li");
console.log(newHtml);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const originalCarros = carros.slice();

carros.pop();
console.log(carros);
console.log(originalCarros);

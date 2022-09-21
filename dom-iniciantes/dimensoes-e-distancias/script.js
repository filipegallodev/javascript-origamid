const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.scrollHeight);

const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');

console.log(primeiroH2.offsetLeft);

const h2rect = primeiroH2.getBoundingClientRect();

console.log(h2rect);
console.log(h2rect.height);

if (h2rect.top < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.scrollY
)

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Tela menor que 600px');
}
else {
  console.log('Tela maior que 600px');
}




console.log('- Exercícios -');
// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaLarguraImagens() {

  const imgs = document.querySelectorAll('img');
  let totalWidth = 0;

  imgs.forEach((item) => totalWidth += item.offsetWidth);

  console.log(`Largura total de todas as imagens: ${totalWidth}`);
}

window.onload = function () {
  somaLarguraImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((item) => {
  const largura = item.offsetWidth;
  const altura = item.offsetHeight;

  if ((altura >= 48) && (largura >= 48)) {
    console.log(item, 'Possui boa acessibilidade.');
  }
  else {
    console.log(item, 'Não possui boa acessibilidade.');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log(menu.classList);
}
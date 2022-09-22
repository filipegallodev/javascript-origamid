const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

// animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this);
  console.log(this.getAttribute('href'));
  console.log(event.currentTarget);
}

// linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mouseout', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('background-azul');
  }
  console.log(event.key);
}

// window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImagem(event) {
  console.log('Clicou na ', event.currentTarget.getAttribute('src'));
}

imgs.forEach((imagem) => {
  // imagem.addEventListener('click', handleImagem);
});





console.log('- Exercícios - ');
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event) {
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });

  event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLinkInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleElementClick(event) {
  console.log(event.currentTarget);
}

allElements.forEach((elemento) => {
  elemento.addEventListener('click', handleElementClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementOnClick(event) {
  event.currentTarget.remove();
}

allElements.forEach((elemento) => {
  // elemento.addEventListener('click', removeElementOnClick);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyboardFont(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-maior');
  }
}

window.addEventListener('keydown', handleKeyboardFont);
// const h1 = document.querySelector('h1');

// h1.innerHTML = 'Animais Fantásticos Demais';
// h1.outerHTML = '<p>Novo Título</p>;'

// const lista = document.querySelector('.animais-lista');

// console.log(lista);
// console.log(lista.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo);
// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);
// contato.insertBefore(animais, mapa);

// const novoH1 = document.createElement('h1');

// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// mapa.appendChild(novoH1);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// cloneH1.classList.add('azul');
// faq.appendChild(cloneH1);



console.log('- Exercícios -');
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuCopia = menu.cloneNode(true);

copy.appendChild(menuCopia);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('dl dt:first-child');
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;
console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

// faq.replaceWith(animais);
faq.innerHTML = animais.innerHTML;
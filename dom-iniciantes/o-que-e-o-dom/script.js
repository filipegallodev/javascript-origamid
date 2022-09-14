const href = window.location.href;
console.log(href)

if (href === 'http://127.0.0.1:5500/dom-iniciantes/o-que-e-o-dom/index.html') {
  console.log('É igual')
}


const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado.innerText);
console.log(h1Selecionado.classList);
console.log(h1Selecionado.classList[0]);

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

h1Selecionado.addEventListener('click', function () {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
});


function callBackH1() {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
}

h1Selecionado.addEventListener('click', callBackH1);


console.clear();

// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(urlPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const firstElement = document.querySelector('.ativo');
console.log(firstElement);

// Retorne a linguagem do navegador
const browserLanguage = window.navigator.language;
console.log(browserLanguage);

// Retorne a largura da janela 
const tamanhoTela = window.innerWidth;
console.log(tamanhoTela);
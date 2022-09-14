var nome = 'Filipe';

var nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('Clicou')
})



console.log(nome.replace('e', 'ão'))
console.log(nome.toUpperCase())
console.log(nome.length)


btn.addEventListener('click', function () { });
console.log(btn.classList)
console.log(btn.lastChild)
console.log(btn.id)
console.log(btn.outerHTML)
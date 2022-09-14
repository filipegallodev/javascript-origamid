var videoGames = ['Switch', 'PS5', 'Xbox Series X'];

console.log(videoGames[1])
videoGames.push('Nintendo')
console.log(videoGames.length)

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
  if (videoGames[i] === 'PS5') {
    break;
  }
}

videoGames.forEach(item => {
  console.log(`${item} : ${item.length}`)
})

videoGames.forEach(function (item, index) {
  console.log(`Index ${index}: ${item}. Tamanho: ${item.length}`)
})




// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta)

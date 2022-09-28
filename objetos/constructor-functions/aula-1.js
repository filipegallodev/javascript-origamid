function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const carro1 = new Carro('Civic', 125000);
const carro2 = new Carro('Focus', 40000);

function mostrarCarro(carro) {
  console.log(`O preço de um ${carro.marca} é de R$ ${carro.preco} aproximadamente.`);
}

mostrarCarro(carro1);
mostrarCarro(carro2);

function CarroComTaxa(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const carro3 = new CarroComTaxa('Camaro', 480000);

mostrarCarro(carro3);
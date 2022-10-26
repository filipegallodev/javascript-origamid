class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log("Moto acelerou");
  }
  empinar() {
    console.log("Empinou");
  }
}

const yamaha = new Moto(2, "Álcool", true);

console.log(yamaha);
yamaha.empinar();
yamaha.acelerar();

const hondaCivic = new Veiculo(4, "Gasolina");

console.log(hondaCivic);
hondaCivic.acelerar();

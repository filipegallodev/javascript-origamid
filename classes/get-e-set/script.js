// const button = {
//   get tamanho() {
//     return this._numero || 100;
//   },
//   set tamanho(numero) {
//     this._numero = numero * 200;
//   },
// };

// console.log(button.tamanho);

// button.tamanho = 250;
// console.log(button.tamanho);

// const frutas = {
//   lista: [],
//   set nova(fruta) {
//     this.lista.push(fruta);
//   },
// };

// frutas.nova = "Banana";
// frutas.nova = "Melância";
// console.log(frutas);

// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background;
//   }
//   get element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
// }

// const blueButton = new Button("Comprar", "blue");

// console.log(blueButton.element);

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button("Comprar", "blue");

console.log(blueButton.element);

blueButton.element = "a";
console.log(blueButton.element);

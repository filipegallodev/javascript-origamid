// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//   }
// }

// const blueButton = new Button("Comprar", "blue", "white");
// const redButton = new Button("Vender", "red", "white");

// console.log(blueButton.element());
// console.log(redButton.element());

// document.body.appendChild(blueButton.element());
// document.body.appendChild(redButton.element());
// blueButton.appendTo("body");
// redButton.appendTo("body");

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueButtonOptions = {
//   color: "white",
//   backgroundColor: "blue",
//   text: "Comprar",
//   borderRadius: "2px",
// };

// const blueButton = new Button(blueButtonOptions);

// console.log(blueButton);

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static create(text, background) {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const blueButtonOptions = {
//   color: "white",
//   backgroundColor: "blue",
//   text: "Comprar",
//   borderRadius: "2px",
// };

// const blueButton = new Button(blueButtonOptions);
// console.log(blueButton);

// const blueButtonStatic = Button.create("Clique", "blue");
// console.log(blueButtonStatic);

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton("Comprar");

console.log(botaoAzul);

// function createButton(text) {
//   const numeroSecreto = "2d983982dajs";

//   function element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
//   return Object.freeze({
//     text,
//     element,
//   });
// }

// const buyButton = createButton("Comprar");
// const sellButton = createButton("Vender");

// buyButton.text = "Não comprar";

// console.log(buyButton);
// console.log(sellButton);

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) {
//     return new Pessoa(nome);
//   }
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function () {
//   return `${this.nome} andou`;
// };

// const dev = Pessoa("Filipe");

// console.log(dev.andar());

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$("button");

console.log(btns.elements);
console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
  btns.removeClass("active");
}

btns.on("click", handleClick);
btns.addClass("active");

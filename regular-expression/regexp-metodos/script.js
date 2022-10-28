// const regexp = /\w+[.-]/gi;

// const regexp1 = new RegExp("\\w", "gi");

// const frase = "JavaScript Linguagem 101";
// console.log(frase.replace(regexp1, "X"));

// console.log(regexp);
// console.log(regexp.flags);
// console.log(regexp.global);
// console.log(regexp.source);

// const regexp = /Java/g;

// const frase = "JavaScript e Java Linguagem 101, Java";

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));

// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));

// let i = 1;
// while (regexp.test(frase)) {
//   console.log("Teste " + i++);
// }

// const frase = "JavaScript, TypeScript, CoffeeScript, Java";

// const regexp = /\w+/g;

// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));

// let i = 1;
// let regexpResult;
// while ((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult[0], i++);
// }

// const frase = "JavaScript, TypeScript, CoffeeScript, Java";

// const regexp = /\w+/g;

// console.log(frase.match(regexp));

// const regexp2 = /\,\s/g;
// const regexp3 = /Script/g;

// const resultados = frase.split(regexp2);

// console.log(resultados);

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regexp = /(?<=<\/?)\w+/g;
// const regexp = /<li/g;

// console.log(tags.replace(regexp, "$& class='ativo'"));

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `;

// const regexp = /(\w+@)[\w.]+/g;

// console.log(emails.replace(regexp, "$1gmail.com"))

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com
`;

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function (...args) {
  console.log(args[2]);
  if (args[2] === "homail.com.br") {
    return args[1] + "hotmail.com.br";
  }
  if (args[2] === "ggmail.com.br") {
    return args[1] + "gmail.com.br";
  }
  if (args[2] === "oulook.com.br") {
    return args[1] + "outlook.com.br";
  }
  return args[0];
});

console.log(resultado);

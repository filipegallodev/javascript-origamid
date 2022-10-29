import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();

const validadorCpf = new ValidarCpf();

console.log(validadorCpf.formatar("111 222 333 44"));
console.log(validadorCpf.validar("111 222 333 44"));

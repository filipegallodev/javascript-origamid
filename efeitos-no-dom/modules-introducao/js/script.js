import { initAccordion } from "./modules/accordion.js";
import { initAnimacaoScroll } from "./modules/scroll-animacao.js";
import { initScrollSuave } from "./modules/scroll-suave.js";
import { initTabNav } from "./modules/tabnav.js";
import * as teste from "./modules/teste.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();

console.log(teste);
teste.teste1();
teste.teste2();
console.log(teste.senha);

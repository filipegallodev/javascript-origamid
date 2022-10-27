// const frase = "JavaScript";
// const regexp = /J/;
// const fraseNova = frase.replace(regexp, "B");

// console.log(fraseNova);

// // Procura: a
// const padraoRegexp = /a/;

// const texto = "JavaScript";
// const novoTexto = texto.replace(padraoRegexp, "B");
// // BavaScript

// // Procura: J seguido de a, v e a
// const regexp = /Java/;

// "JavaScript".replace(regexp, "Type");
// // TypeScript

// // Procura: Todo a
// const regexp = /a/g;

// "JavaScript".replace(regexp, "i");
// // JiviScript

// // Procura: Todo PE, Pe, pE e pe
// const regexp = /Pe/gi;

// "Perdeu perdido".replace(regexp, "Ba");
// // Bardeu Bardido

// // Procura: Todo a, A, i, I
// const regexp = /[ai]/gi;

// "JavaScript".replace(regexp, "u");
// // JuvuScrupt

// // Procura: - ou .
// const regexp = /[-.]/g;

// "111.222-333-44".replace(regexp, "");
// // 11122233344

// // Procura: B, seguido de r, a
// // seguido de s ou z, seguido de i, l
// const regexp = /Bra[sz]il/g;

// "Brasil é com z: Brazil".replace(regexp, "Prazer");
// // Prazer é com z: Prazer

// // Busca por itens de a à z
// const regexp = /[a-z]/g;

// "JavaScript é a linguagem.".replace(regexp, "0");
// // J000S00000 é 0 000000000.

// // Busca por itens de a à z e A à Z
// const regexp = /[a-zA-Z]/g;

// "JavaScript é a linguagem.".replace(regexp, "1");
// // 1111111111 é 1 111111111.

// // Busca por números de 0 à 9
// const regexpNumero = /[0-9]/g;

// "123.333.333-33".replace(regexpNumero, "X");
// // XXX.XXX.XXX-XX

// // Procura: tudo que não estiver entre a e z
// const regexp = /[^a-z]/g;

// "Brasil é com z: Brazil".replace(regexp, " ");
// // rasil   com z   razil

// // Procura: todos os caracteres menos quebra de linha
// const regexp = /./g;

// "JavaScript é a linguagem.".replace(regexp, "0");
// // 0000000000000000000000000

// // Procura: todos os pontos
// const regexp = /\./g;
// const regexpAlternativa = /[.]/g;

// "999.222.222.11".replace(regexp, "-");
// // 999-222-222-11

// // Procura: todos os alfanuméricos
// const regexp = /\w/g;

// "Guarda-chuva R$ 23,00.".replace(regexp, "-");
// // ------------ -$ --,--.

// // Procura: o que não for caracter alfanuméricos
// const regexp = /\W/g;

// "Guarda-chuva R$ 23,00.".replace(regexp, "-");
// // Guarda-chuva-R--23-00-

// // Procura: todos os dígitos
// const regexp = /\d/g;

// "+55 (21) 2222-2222".replace(regexp, "X");
// // +XX (XX) XXXX-XXXX.

// // Procura: o que não for dígito
// const regexp = /\D/g;

// "+55 (21) 2222-2222".replace(regexp, "");
// // 552122222222

// // Procura: espaços em branco
// const regexp = /\s/g;

// "+55 (21) 2222-  2222  ".replace(regexp, "");
// // +55(21)2222-2222

// // Procura: o que não for espaço em branco
// const regexp = /\S/g;

// "+55 (21) 2222-  2222  ".replace(regexp, "");
// // XXX XXXX XXXXX  XXXX

// // Procura: 4 a's seguidos
// const regexp = /aaaa/g;
// const regexpAlt = /a{4}/g;

// "Vaaaai ali por favor.".replace(regexp, "a");
// // Vai ali por favor.

// // Procura: dígitos seguidos de 2 à 3
// const regexp = /\d{2,3}/g;

// "222.333.222.42".replace(regexp, "X");
// // X.X.X.X

// // Procura: letras seguidos com 1 caracter ou mais
// const regexpLetras = /\w{1,}/g;

// "A melhor linguagem é JavaScript".replace(regexpLetras, "X");
// // X X X é X

// // Procura: dígitos em ocorrência de um ou mais
// const regexp = /\d+/g;

// "222.333.222.42".replace(regexp, "X");
// // X.X.X.X

// // Procura: Começa com d, seguido por uma ou mais letras.
// const regexpLetras = /d\w+/g;

// "Dígitos, dados, desenhos, Dito, d".replace(regexpLetras, "X");
// // Dígitos, X, X, Dito, d

// // Procura: Começa com d, seguido por zero ou mais letras.
// const regexp = /d\w*/g;

// "Dígitos, dados, desenhos, Dito, d".replace(regexp, "X");
// // Dígitos, X, X, Dito, X

// // Procura: Por regex com p opcional
// const regexp = /regexp?/g;

// "Qual é o certo, regexp ou regex?".replace(regex, "Regular Expression");
// // Qual é o certo, Regular Expression ou Regular Expression?

// // Procura: java ou php (case insensitive)
// const regexp = /java|php/gi;

// "PHP e Java são linguagens diferentes".replace(regexp, "X");
// // X e X são linguagens diferente

// // Procura: java (case insensitive)
// const regexp = /java/gi;
// "Java não é JavaScript.".replace(regexp, "X");
// // X não é XScript.

// // Procura: java (case insensitive)
// const regexpBoundary = /\bjava\b/gi;
// "Java não é JavaScript.".replace(regexpBoundary, "X");
// // X não é JavaScript.

// // Procura: Dígitos em sequência, que estejam isolados
// const regexpDigito = /\b\d+\b/gi;
// "O Restaurante25 na Rua 3, custa R$ 32,00".replace(regexDigito, "X");
// // O Restaurante25 na Rua X, custa R$ X,X

// "11_22 33-44 55é66 77e88".replace(regexpDigito, "X");
// // 11_22 X-X XéX 77e88

// const regexpDigito = /\B\d+\B/gi;

// "11_22 33-44 55é66 77e88".replace(regexpDigito, "X");
// // 1X_X2 33-44 55é66 7XeX8

// // Procura: sequência de alfanuméricos
// // no início da linha.
// const regexp = /^\w+/g;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, "X");
// // X@origamid.com
// // contato@origamid.com

// // Procura: sequência de alfanuméricos
// // no final da linha.
// const regexp = /\w+$/g;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, "X");
// // andre@origamid.com
// // contato@origamid.X

// // Procura: sequência de alfanuméricos
// // no final da linha.
// const regexp = /\w+$/gm;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, "X");
// // andre@origamid.X
// // contato@origamid.X

// // Procura: sequência de alfanuméricos
// // no início da linha.
// const regexp = /^\w+/gm;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, "X");
// // X@origamid.com
// // X@origamid.com

// const regexp = /\n/g;

// `andre@origamid.com\ncontato@origamid.com`.replace(regexp, "---");
// // andre@origamid.com---contato@origamid.com

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, "X");
// // andre@origamid.com---contato@origamid.com

// // Procura: @ ou ©
// const regexp = /\u0040|\u00A9/g;

// "andre@origamid.com ©".replace(regexp, "---");
// // andre---origamid.com ---

// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Filipe", idade: 22 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promise."));
//   }
// });

// console.log(promessa);

// const retorno = promessa
//   .then((resolve) => {
//     console.log(resolve);
//     resolve.profissao = "Desenvolvedor Front-End";
//     return resolve;
//   })
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   })
//   .finally(() => {
//     console.log("Acabou");
//   });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado!");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados!");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
// const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolve) => {
  console.log(resolve);
});

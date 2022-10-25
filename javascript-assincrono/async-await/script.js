// async function puxarDados() {
//   const response = await fetch("./dados.json");
//   const data = await response.json();

//   document.body.innerText = data.aula;
// }

// puxarDados();

// async function puxarDados() {
//   try {
//     const response = await fetch("./dados.json");
//     const data = await response.json();
//     document.body.innerText = data.aula;
//   } catch (error) {
//     console.warn(error);
//   }
// }

// puxarDados();

// async function puxarDados() {
//   const responseDados = fetch("./dados.json");
//   const responseClientes = fetch("./clientes.json");

//   const dataDados = await (await responseDados).json();
//   const dataClientes = await (await responseClientes).json();

//   console.log(dataDados);
//   console.log(dataClientes);
// }

// puxarDados();

// async function asyncSemPromise() {
//   // Console não irá esperar.
//   await setTimeout(() => console.log("Depois de 1s"), 1000);
//   console.log("Acabou");
// }
// asyncSemPromise();

async function asyncComPromise() {
  // Console irá esperar.
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Depois de 1s");
      resolve();
    }, 1000);
  });
  console.log("Acabou");
}
asyncComPromise();

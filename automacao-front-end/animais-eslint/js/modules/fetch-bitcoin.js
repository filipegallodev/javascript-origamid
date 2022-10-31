export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    await fetch(url)
      .then((response) => response.json())
      .then((bitcoin) => {
        const btcPreco = document.querySelector(".btc-preco");
        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      })
      .catch((erro) => {
        console.log(Error(erro));
      });
  }

  fetchBitcoin("https://blockchain.info/ticker");
}

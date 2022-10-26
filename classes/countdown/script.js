import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("25 December 2022 00:00:00 GMT-0300");

setInterval(() => {
  console.clear();
  console.log(tempoParaONatal.total);
}, 1000);

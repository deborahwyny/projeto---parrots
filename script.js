let qtdCartas = prompt("Insira um numero par de 4 a 14 para iniciar o jogo:");

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
  qtdCartas = prompt("Insira um numero par de 4 a 14 para iniciar o jogo:");
}

// remover carta fixa no inicio
const cartaFixa = document.querySelector("main");
const cartaInicial = document.querySelector("#card01");
cartaInicial.remove();

let gifsFront = [
  "./assets/bobrossparrot.gif",
  "./assets/explodyparrot.gif",
  "./assets/fiestaparrot.gif",
  "./assets/metalparrot.gif",
  "./assets/revertitparrot.gif",
  "./assets/tripletsparrot.gif",
  "./assets/unicornparrot.gif",
];

//duplicar gifs

let gifsFrontDuplicados = [];
for (let i = 0; i < qtdCartas / 2; i++) {
  gifsFrontDuplicados.push(gifsFront[i]);
  gifsFrontDuplicados.push(gifsFront[i]);
}

for (let i = gifsFrontDuplicados.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [gifsFrontDuplicados[i], gifsFrontDuplicados[j]] = [
    gifsFrontDuplicados[j],
    gifsFrontDuplicados[i],
  ];
}
// para gerar o numero de cartas
for (let i = 0; i < qtdCartas; i++) {
  const carta = document.createElement("div");
  carta.className = "card";
  carta.setAttribute("data-test", ".card");
  carta.innerHTML =
    '<div class="card-back"><img class="img-back" src="./assets/back.png" data-test="face-down-image" alt="figura de um papagaio - card01"></div><div class="card-front" ><img class="img-face" src="" data-test="face-up-image" alt="papagaio unicornio"></div>';
  let main = document.querySelector("#card");
  main.appendChild(carta);
}

// flip da tarde quando clicada
const cards = document.querySelectorAll(".card");
let primeiraCartaVirada = null;
let segundaCartaVirada = null;

function flipcard() {
  this.classList.toggle("flip");

  if (primeiraCartaVirada === null){
    primeiraCartaVirada = this;
  } else if (segundaCartaVirada === null){
    segundaCartaVirada = this;
    if (primeiraCartaVirada.querySelector('.img-face').getAttribute("src") === segundaCartaVirada.querySelector('.img-face').getAttribute("src")) {
        primeiraCartaVirada = null;
        segundaCartaVirada = null;
    } else {
        setTimeout(() => {
            primeiraCartaVirada.classList.remove("flip");
            segundaCartaVirada.classList.remove("flip");
            primeiraCartaVirada = null;
            segundaCartaVirada = null;
          }, 1000);
  }
}
}

cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});

//adicionando os gifs no parte da frente da carta

const cardsFront = document.querySelectorAll(".img-face");

cardsFront.forEach((card, index) => {
  card.setAttribute("src", gifsFrontDuplicados[index]);
});

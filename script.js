
    let qtdCartas = prompt('Insira um numero par de 4 a 14 para iniciar o jogo:');

    while(qtdCartas < 4 || qtdCartas > 14 || qtdCartas%2 !== 0) {
        qtdCartas = prompt('Insira um numero par de 4 a 14 para iniciar o jogo:');
    }

const cartaFixa = document.querySelector('main');
const cartaInicial = document.querySelector('#card01');
cartaInicial.remove()

    let numCartas = qtdCartas;

    for(let i = 0; i < numCartas; i++){
        const carta = document.createElement('div');
        carta.className = 'card';
        carta.innerHTML = '<div class="card-back"><img class="img-back" src="./assets/back.png" alt="figura de um papagaio - card01"></div><div class="card-front" ><img class="img-face" src="./assets/unicornparrot.gif" alt="papagaio unicornio"></div>';
        let main = document.querySelector('#card')
        main.appendChild(carta);

    }
    


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
        carta.setAttribute("data-test", "card");
        carta.innerHTML = '<div class="card-back"><img class="img-back" src="./assets/back.png" data-test="face-down-image" alt="figura de um papagaio - card01"></div><div class="card-front" ><img class="img-face" src="./assets/unicornparrot.gif" data-test="face-up-image" alt="papagaio unicornio"></div>';
        let main = document.querySelector('#card')
        main.appendChild(carta);

    }


    const cards = document.querySelectorAll('.card');

    function flipcard(){
        this.classList.toggle('flip')
    }

    cards.forEach(card => {
      card.addEventListener('click', flipcard);
    });



    // minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

    // // Esta função pode ficar separada do código acima, onde você preferir
    // function comparador() { 
    //     return Math.random() - 0.5; 
    // }
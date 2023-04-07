
function escolhaCartas() {
    let qtdCartas = prompt('Insira um numero par de 2 a 14 para iniciar o jogo:');
    while(qtdCartas < 2 || qtdCartas > 14) {
        qtdCartas = prompt('Insira um numero par de 2 a 14 para iniciar o jogo:');
    }
    return qtdCartas;
}

const qtdCartas = escolhaCartas();
document.addEventListener('DOMContentLoaded', function() {
    const jogador = document.getElementById('jogador');
    const labirinto = document.getElementById('labirinto');

    const larguraJogador = parseFloat(window.getComputedStyle(jogador).width);
    const larguraLabirinto = parseFloat(window.getComputedStyle(labirinto).width);
    const velocidade = 10;

    document.addEventListener('keydown', function(event) {
        let posicaoX = parseFloat(window.getComputedStyle(jogador).left);
        let posicaoY = parseFloat(window.getComputedStyle(jogador).top);

        switch(event.key) {
            case 'ArrowLeft':
                posicaoX -= velocidade;
                if (posicaoX < 0) posicaoX = 0;
                break;
            case 'ArrowRight':
                posicaoX += velocidade;
                if (posicaoX > larguraLabirinto - larguraJogador) posicaoX = larguraLabirinto - larguraJogador;
                break;
            case 'ArrowUp':
                posicaoY -= velocidade;
                if (posicaoY < 0) posicaoY = 0;
                break;
            case 'ArrowDown':
                posicaoY += velocidade;
                if (posicaoY > larguraLabirinto - larguraJogador) posicaoY = larguraLabirinto - larguraJogador;
                break;
        }

        jogador.style.left = `${posicaoX}px`;
        jogador.style.top = `${posicaoY}px`;
    });
});


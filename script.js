document.addEventListener('DOMContentLoaded', function() {
    const bloco = document.getElementById('bloco');
    let posicaoX = parseFloat(window.getComputedStyle(bloco).left);
    let posicaoY = parseFloat(window.getComputedStyle(bloco).top);
    const velocidade = 10; // Ajuste conforme necessário

    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowLeft':
                posicaoX -= velocidade;
                break;
            case 'ArrowRight':
                posicaoX += velocidade;
                break;
            case 'ArrowUp':
                posicaoY -= velocidade;
                break;
            case 'ArrowDown':
                posicaoY += velocidade;
                break;
        }
        bloco.style.left = `${posicaoX}px`;
        bloco.style.top = `${posicaoY}px`;
    });
});

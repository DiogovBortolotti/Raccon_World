const personagem = document.querySelector('.personagem');
const objeto = document.querySelector('.objeto');


const pulo = () => {
    persongem.classList.add('pulo');

    setTimeout(() => {
        personagem.classList.remove('pulo');
    }, 500);
}


const interacao_cenario_loop = setInterval(() =>{
    const objetoPosicao = objeto.offsetLeft;
    const personagemPosicao = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if (objetoPosicao <= 120 && personagemPosicao >= 0 && personagemPosicao < 80){
        objeto.style.animation ='none';
        objeto.style.left =`${objetoPosicao}px`;
       
        personagem.style.animation ='none';
        personagem.style.left = `${personagemPosicao}px`;

        personagem.src ='./imagens/morreu.png';        
        personagem.style.width = '75px';
        personagem.style.marginLeft ='50px';

        clearInterval(interacao_cenario_loop);
        setTimeout(() => {
            document.location.reload(true)
        }, 10000);
    }
},10)


document.addEventListener('keydown', pulo)
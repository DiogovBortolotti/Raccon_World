const objeto = document.querySelector(".objeto");
const personagem = document.querySelector(".personagem");


const interacao_cenario = setInterval(() => {
    const objetoPosicao = objeto.offsetLeft;
    const personagemPosicao = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if (objetoPosicao <= 120 && personagemPosicao >= 0 && personagemPosicao < 80){
        objeto.style.animation ='none';
        objeto.style.left ='${objetoPosicao}px';
       
        personagem.style.animation ='none';
        personagem.style.left ='${personagemPosicao}px';

        personagem.src ='./Imagens/fimdejogo.png'        
        persongem.style.widht
    }
10,
})

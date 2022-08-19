/*Para adicionar o jump na imagem do mario, precisamos pegar o elemento da imagem do mario  o  pipe também*/

const mario = document.querySelector('.mario'); // seletor mario imagem
const pipe = document.querySelector('.pipe'); // pegando a imagem do tubo
const pipe2 = document.querySelector('.pipe2');

const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');

const score = document.querySelector('score');

let count = 0;

/* Escrevendo a função Jump usando função fantasma*/
const jump = () => {
    mario.classList.add('jump'); /* com a função feita quando apertamos qualquer tecla do teclado ele adiciona jump na classe mario*/
    
    /* Porém uma vez adicionada a classe não conseguimos pular novamente, então criamos um setTimeOut e removemos a classe jump da classe mario respeitando o tempo da animação */
    setTimeout(() => {

        mario.classList.remove('jump');

    },500)

}

/* Aqui vamos criar um looping para verificar se o game acabou */

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft; // deslocamento esquerdo verificação do pipe
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', ''); // Não podemos pegar a imagem do mario da mesma forma que fizemos com o pipe por que não encontra o css da imagem undefined
    // porém com window.getComputedStyle(mario).bottom estilo computado na imagem e pegamos a propiedade bottom, e devemos retornar em número colocamos o sinal de + string de números
    
    // Lógica = Se tubo chegou a 120px da esquerda e a posição do pipe é maior que 0 e mario está com a altura menor que 85px = acaba o jogo
    if (pipePosition <= 120 && pipePosition > 0 && marioPostion < 85) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;// sempre que chegar aqui o jogo acaba, porém so acaba o jogo se o mario n pular

        pipe2.style.animation = 'none';
       

        // então vamos trabalhar na altura do mario(propiedade bottom)
        /* Aqui vamos fazer o mario parar exatamente na posição que ele caiu */
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPostion}px`;

        mario.src= './imagens/marioGameOver.png';
        
        //Mudar animação para parar diferente(Bugado).
        // clouds.style.animation = 'none';
        // clouds2.style.animation = 'none';
        
        clearInterval(loop);
    } 

},10)


const loop2 = setInterval(() =>{
    const pipePosition2 = pipe2.offsetLeft;
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', ''); 
    
    if(pipePosition2 <= 120 && pipePosition2 > 0 && marioPostion < 85){
        
        pipe2.style.animation = `none`;
        pipe2.style.left = `${pipePosition2}px`;
    
    pipe.style.animation = `none`;
    
    mario.style.animation = `none`;
    mario.style.bottom = `${marioPostion}px`
    
    mario.src = './imagens/marioGameOver.png';
    
    clearInterval(loop2);
    
    }

    count++
    score.innerHTML = `SCORE:${count}`;
    console.log(innerHTML);
})

// mario = setInterval(() => {
//     console.log(mario);
// },1)

/* Adiciona um evento de pressionar o teclado e a função pular*/
document.addEventListener('keydown', jump);


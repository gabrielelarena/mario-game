const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.querySelector('.restart-btn');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{
    console.log('loop')
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition)

    
    if (pipePosition <= 125 && pipePosition>0 && marioPosition <80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`


        mario.src = 'assets/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        document.querySelector('.restart-btn').addEventListener('click', function(){
            window.location.reload();
            return false
        });
         
        clearInterval(loop);
    }

},10);

document.addEventListener('keydown',jump);
const player = document.querySelector('.player')
const obstaculo = document.querySelector('.obstaculo')
const score = document.getElementById('score')
let numero = 0

const jump = () => {
    player.classList.add('jump')

    setTimeout(() => {
        player.classList.remove('jump')
    }, 500)
}

/* Const com uma função anonima que é responsável pelo pulo do player junto com o setTimeout que remove a classe jump para poder pular novamente */


const loop = setInterval(() => {

    const obstPositionLeft = obstaculo.offsetLeft
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '')


    if (obstPositionLeft <= 100 && obstPositionLeft > 0 && playerPosition < 80) {

        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstPositionLeft}px`

        player.style.animation = 'none'
        player.style.bottom = `${playerPosition}px`

        score.innerHTML = `Sua pontuação foi ${numero}.`

        clearInterval(loop)
    } if (obstPositionLeft === -70) {
        contaScore ()
    }

    console.log(obstPositionLeft)

}, 10)


function contaScore () {
    score.innerHTML = ++numero
}


function reset () {
    window.location.reload()
}

// Const com o loop que é responsável por ficar verificando os valores que precisa pra determinar se o player e o obstaculo se colidiram.

document.addEventListener('keydown', jump)
// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Variaveis Botões
const btnStart = document.querySelector("#btnStart")
const btnAgain = document.querySelector("#btnAgain")

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function seeLuck(){
    toggleScreen()
}

btnStart.addEventListener('click', seeLuck)

function seeAgain(){
    toggleScreen()
}

btnAgain.addEventListener('click', seeAgain)


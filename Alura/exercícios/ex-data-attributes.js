var botao = document.querySelectorAll(".botao")
var lista = document.querySelector(".lista")

botao[0].addEventListener('click', () => {
    lista.style.display = "none"
})
botao[1].addEventListener('click', () => {
    lista.style.display = "block"
})
    
    




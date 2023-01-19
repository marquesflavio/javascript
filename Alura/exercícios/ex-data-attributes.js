var botao = document.querySelectorAll(".botao")
var lista = document.querySelectorAll(".lista")

botao.addEventListener("click", () => {
    
    if (lista.style.display === "none"){
        lista.style.display = "block"
    } else{
        lista.style.display = "none"
    }
})






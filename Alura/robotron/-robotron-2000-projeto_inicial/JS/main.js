const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) => { //forEach é o evento de repetição para Arrays
    elemento.addEventListener('click',(evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode) //target mostra o que foi clicado no DevTools
    })
})


function manipulaDados (operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}
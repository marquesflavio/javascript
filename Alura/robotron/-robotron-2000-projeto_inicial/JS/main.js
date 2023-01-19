const braco = document.querySelector("#braco")
const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) => { //forEach é o evento de repetição para Array
    elemento.addEventListener('click',(evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //target mostra o que foi clicado no DevTools, parentNode é o pai do elemento, na árvore DOM
    })
})


function manipulaDados (operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}
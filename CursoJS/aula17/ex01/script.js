//var globais
let num = document.getElementById('txtnum')
let lista = document.getElementById('txtlista')
let res = document.getElementById('res')
let valores = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
    return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ //o indexOf retorna o valor onde o n está, e o -1 indica que o valor não está na lista (aula de array), e o != é negação. Então lê-se assim: retorna o valor de n caso ele NÃO ESTEJA na lista ( != -1)
        return true
    } else {
        return false
    }
}

function adicionar(){
    //primeiro limitar se o que foi digitado é um número e se repetiu na lista
    if (isNum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // vai adicionar os números digitados na variável num ao vetor
        //agora temos que adicionar o valor na lista (select), para isso precisamos de um <option> 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado` 
        lista.appendChild(item) // o appendChild é necessário para mostrar o item criado, n
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //para depois de adicionar um número campo ficar vazio
    num.focus() //para o cursos do mouse ficar posicionado (focado) no campo num

}

function finalizar(){
    if (valores.length == 0){
    window.alert('[ERRO] Primeiro adicione valores!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for (let pos in valores){ // criada var pos para verificar > e < números
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML =''
        res.innerHTML +=`<p> Ao todo temos ${tot} número(s) cadastrado(s)</p>`
        res.innerHTML +=`<p>O maior valor é o ${maior}</p>`
        res.innerHTML +=`<p>O menor valor é o ${menor}</p>`
        res.innerHTML +=`<p>A soma dos valores digitados é ${soma}</p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media}</p>`
    }
}

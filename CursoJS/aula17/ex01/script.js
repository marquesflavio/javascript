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
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    //primeiro limitar se o que foi digitado é um número e se repetiu
    if (isNum(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo ok')
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

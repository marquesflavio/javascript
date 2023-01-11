function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value == '' || fim.value == '' || passo.value == 0){
        window.alert ('[ERRO] Faltam dados!')
    } else {
        var i = Number(inicio.value) //conversão das variáveis de string para numbers
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if (i < f){ //CONTAGEM PROGRESSIVA
            for (var c = i; c <= f; c = c + p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { // CONTAGEM REGRESSIVA
            for (var c=i; f <= c; c=c-p){
                res.innerHTML +=`${c} \u{1F449}`
            }
        }
        res.innerHTML +=`${c} \u{1F3C1}`//como o comando de resultado é igual, é só colocar uma vez fora do if ao invés de colocar duas vezes.
    }
}
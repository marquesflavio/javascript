function palindromo (){
    var palavra = "rever"
    var separandoLetras = palavra.split('') //split separa cada letra da string
    var palavraInvertida = separandoLetras.reverse()
    palavraInvertida = palavraInvertida.join('')
}
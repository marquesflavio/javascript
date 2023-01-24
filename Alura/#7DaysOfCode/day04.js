var num = Math.floor(Math.random() * 11)
console.log(num)
var palpite = prompt('Tente adivinhar um número de 0 a 10')
var c = 1

if (palpite == num){
    console.log('Parabéns, você acertou!')

} else {
    while ( c <= 3){
    alert('Tente novamente')
        }
        c ++
}


  

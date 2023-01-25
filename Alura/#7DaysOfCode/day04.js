/* RESOLUÇÃO DA ALURA
var num = Math.floor(Math.random() * 11);
var palpite = ""
var acertou = false

for(var c = 0; c <3; c ++){
    palpite = prompt('Tente adivinhar um número de 0 a 10')
    if (palpite == num){
        alert(`Parabéns, você acertou, o número era ${num}`)
        acertou = true
        break
    }
    alert('Errado!')
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era o ${num}`)
}
*/
var num = Math.floor(Math.random() * 11)
console.log(num)

var palpite = prompt('Tente adivinhar um número de 0 a 10')

for (c = 0; c<3;c++){
    if (palpite == num){
        alert('Parabéns, você acertou!')
        break
    } else {
        prompt('Tente novamente')
    }       
}
  

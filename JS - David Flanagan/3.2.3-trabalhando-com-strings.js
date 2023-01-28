var s = 'hello, world'

console.log(s.charAt(0)) // retorna o caractere conforme o índice especificado, base zero.
console.log(s.charAt(s.length-1)) // retorna o último caractere
//dá para tratar strings como arrays também ao invés de usar o charAt
console.log(s[0])
console.log(s[s.length-1])
s.substring(1,4) //esconde o 1º e o 4º caractere, mostrando apenas os demais
s.slice(1,4)//faz a mesma coisa
s.slice(-3)//esconde os 3 últimos caracteres

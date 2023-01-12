var num = [5,8,2,9,3] // array; variável com vários elementos
num[5]=1 // acrescentei o valor 1 na quinta posição, lembrando que as posições começam em 0
//para colocar um elemento na última posição, seja ela qual for usar o comando seguinte:
num.push(8) //estou pedindo para colocar o número 8 na última posição do array
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Em ordem crescente, os elementos ficam assim: ${num.sort()}`)
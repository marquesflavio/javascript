let valores = [8,1,7,4,2,9]
valores.sort()
//Primeira forma de mostrar os valores da variável - RUIM
//console.log (valores)

/*Outra forma de mostrar os valores da variável - PÉSSIMO
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*FORMA BOA DE USAR, PORÉM TEM UMA MAIS RECENTE DO ECMASCRIPT - FOR IN
for( var pos = 0; pos<valores.length;pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`) // o [pos] é para mostrar cada elemento por posição (key) 
}
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//Para cada posição (pos) dentro de valores, vou mostrar o valores em posição.
//O (For in) Só funciona em arrays e objetos

console.log(`O valor 7 está na key ${valores.indexOf(7)}`)





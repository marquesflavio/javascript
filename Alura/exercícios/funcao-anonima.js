/* Função anônima 1
var clicado = function () {
    console.log('Fui clicado!')
}

const calcular = document.querySelector('#calcular')
calcular.addEventListener('click', clicado)
*/

//Função anônima 2
const calcular = document.querySelector('#calcular')
calcular.addEventListener('click', function () {
    console.log('Fui clicado!')
} )
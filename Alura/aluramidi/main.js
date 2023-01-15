/*atribuímos parâmetros a function: Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem caclulados e retornar o valor da média.*/
function tocaSom(idElementoAudio){ 
    document.querySelector(idElementoAudio).play() //comando para tocar
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom 
//desse modo não podemos colocar os parênteses, senão o navegador executa a função imediatamente, sem que o usuário clique no botão, gera erro.

const listaDeTeclas = document.querySelectorAll('.tecla')
//querySelectorAll diz que tem uma lista de elementos com uma mesma classe, no caso .tecla
//Constantes (const) possuem escopo de bloco, semelhantes às variáveis (var) declaradas usando o palavra-chave let. O valor de uma constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada.


for(var c = 0; c < listaDeTeclas.length; c++) {

    const tecla = listaDeTeclas[c]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
}
}

/*while (c <= listaDeTeclas.length){

    const tecla = listaDeTeclas[c]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)

    } 
    c ++
}
OBS DO WHILE
cada tecla está identificada com um índice de 0 a 8 como um array
existe uma função anônima
para acessar os diferentes sons em lista, criamos a lista de teclas com .classList[]
*/

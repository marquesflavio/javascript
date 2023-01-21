var nome = prompt('Qual o seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

var pergunta = prompt(`Você gosta de estudar ${linguagem}? Resposta 1 para SIM ou 2 para NÃO`)

if (pergunta == 1){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    console.log('Ahh que pena... Já tentou aprender outras linguagens?')
}


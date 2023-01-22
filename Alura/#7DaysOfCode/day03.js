var nome = prompt('Qual o seu nome?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')

var perg1 = prompt(`Olá ${nome}, já que você está aprendendo ${linguagem}, qual área você pretende seguir? Front-end [1] ou Back-end? [2]`)

if (perg1 == '1'){
    var perg2 = prompt('Legal! No Front-End você quer aprender React[1] ou Vue[2]?')
} else (
    prompt('Legal! No Back-End você quer aprender C# [1] ou Java [2]?')
)

var perg3 = prompt("Legal, você pretende se especializar na área[1] ou vai seguir estudando para se tornar Fullstack[2]?")
if (perg3 == '1'){
    alert('Continue seus estudos para se aprofundar na sua área!')
} else {
    alert('Continue seus estudos para se tornar Fullstack!')
}

alert("Provavelmente existem tecnologias que você gostaria de conhecer ou se especilizar, conte para nós quais são elas")

//estrutura de repetição com string
var tec = [perg4]
do {
    var perg4 = prompt('Quais tecnologias você quer aprender ou se especializar? Caso não tiver mais nenhuma em mente, digite: [2] para finalizar')
    tec.push(perg4)
} while (perg4 !== '2')

console.log(tec)


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

/* SOLUÇÃO DA ALURA.

const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
*/
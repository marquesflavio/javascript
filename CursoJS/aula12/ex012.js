var agora = new Date() //código para pegar a hora em tempo real
var hora = agora.getHours()//código para pegar a hora em tempo real
console.log(`Agora não exatamente ${hora} horas!`)

if (hora < 12){
    console.log('Bom dia!')
} else if ( hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
function dia03() {

var nome = document.querySelector('#txtnome')
var ling = document.querySelector('#txtling')
var res = document.querySelector('#res')

if(nome.textContent == '' || ling.textContent ==''){
    alert('Por favor, preenchar os campos acima antes de continuar!')
} else {
    res.innerHTML=(`Olá, ${nome}, já que você está estudando ${ling}, qual área você quer seguir, Front-End ou Back-End?`)
    }
}

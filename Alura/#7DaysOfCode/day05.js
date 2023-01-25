let arrayFrutas = ['maçã']
let arrayVerduras = []
let arrayLaticinios = ['leite']
let arrayBebidas = []

for (c = 0 ; c < 10; c++){
let res = prompt('Deseja adicionar algo na sua lista de compras, sim ou não?')
    if (res == 'não'){
        break
    } else {
        let item = prompt('Qual item você quer adicionar?')
        let categoria = prompt('Qual categoria se encaixa? Frutas, Verduras, Laticinios ou Bebidas?')
        switch(categoria){
            case ('Frutas'):
                arrayFrutas.push(item)
                break 
            case ('Verduras'):
                arrayVerduras.push(item)
                break 
            case ('Laticinios'):
                arrayLaticinios.push(item)
                break 
            case ('Bebidas'):
                arrayBebidas.push(item)
                break 
            
        }
    } 
} 
var lista = document.querySelector('.lista-mercado')
lista.innerHTML = (`Frutas:${arrayFrutas}<br> Verduras:${arrayVerduras}<br> Bebidas:${arrayBebidas}<br> Laticínios: ${arrayLaticinios}.`)
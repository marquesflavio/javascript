let arrayFrutas = ['maçã']
let arrayVerduras = []
let arrayLaticinios = ['leite']
let arrayBebidas = []
let listaDeCompras = [arrayBebidas, arrayFrutas, arrayLaticinios, arrayVerduras]

for (c = 0 ; c < 10; c++){
let res = prompt('Deseja adicionar algo na sua lista de compras, sim ou não?')
    if (res == 'não'){
        console.log(`${listaDeCompras}`)
        break
    } else {
        let item = prompt('Qual item você quer adicionar?')
        let categoria = prompt('Qual categoria se encaixa?')
        switch(categoria){
            case ('frutas'):
                arrayFrutas.push(item)
                break 
            case ('verduras'):
                arrayVerduras.push(item)
                break 
            case ('laticinios'):
                arrayLaticinios.push(item)
                break 
            case ('bebidas'):
                arrayBebidas.push(item)
                break 
            
        }
    } 
} console.log(`${listaDeCompras}`)
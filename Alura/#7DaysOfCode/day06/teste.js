let arrayFrutas = ['maçã','abacaxi']
let arrayMercearia = ['farinha','arroz']
let arrayLaticinios = ['leite','iogurte']
let arrayBebidas = ['refrigerante','cerveja']


let removeItem = prompt('Qual item você deseja excluir?')
let removeArray = prompt('De qual categoria você quer remover o item? Frutas, Mercearia, Laticinios ou Bebidas?')
if (removeItem == (-1)){
    alert(`${removeItem} não está na lista!`)
} else {
    switch (removeArray){
        case ('Frutas'):
            arrayFrutas.splice(removeItem,1)
            break 
        case ('Mercearia'):
            arrayMercearia.splice(removeItem,1)
            break 
        case ('Laticinios'):
            arrayLaticinios.splice(removeItem,1)
            break 
        case ('Bebidas'):
            arrayBebidas.splice(removeItem,1)
            break
    }
} console.log(`${arrayFrutas}, ${arrayMercearia}, ${arrayLaticinios}, ${arrayBebidas}`)

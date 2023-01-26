function listar(){
    let arrayFrutas = ['maçã']
    let arrayMercearia = []
    let arrayLaticinios = ['leite']
    let arrayBebidas = []

    for (c = 0 ; c >= 0; c++){
    let res = prompt('Deseja adicionar ou remover itens da sua lista? Digite adicionar, remover ou apenas não para ignorar.')
        if (res == 'não'){
            break
        } else if (res == 'adicionar'){
            let item = prompt('Qual item você quer adicionar?')
            let categoria = prompt('Qual categoria se encaixa? Frutas, Mercearia, Laticinios ou Bebidas?')
            switch(categoria){
                case ('Frutas'):
                    arrayFrutas.push(item)
                    break 
                case ('Mercearia'):
                    arrayMercearia.push(item)
                    break 
                case ('Laticinios'):
                    arrayLaticinios.push(item)
                    break 
                case ('Bebidas'):
                    arrayBebidas.push(item)
                    break   
            } 

        } else {
            let removeItem = prompt('Qual item você deseja excluir?')
            let removeArray = prompt('De qual categoria você quer remover o item? Frutas, Mercearia, Laticinios ou Bebidas?')
            if (removeItem == ''){
                alert(`${removeItem} não está na lista ou não foi digitado!`)
            } else {
                switch (removeArray){
                    case ('Frutas'):
                        arrayFrutas.splice(arrayFrutas.indexOf(removeItem),1)
                        break 
                    case ('Mercearia'):
                        arrayMercearia.splice(arrayMercearia.indexOf(removeItem),1)
                        break 
                    case ('Laticinios'):
                        arrayLaticinios.splice(arrayLaticinios.indexOf(removeItem),1)
                        break 
                    case ('Bebidas'):
                        arrayBebidas.splice(arrayBebidas.indexOf(removeItem),1)
                        break
                }
            }
        } 
    }
    var lista = document.querySelector('.lista-mercado')
    lista.innerHTML = (`Frutas: ${arrayFrutas}<br> Mercearia: ${arrayMercearia}<br> Bebidas: ${arrayBebidas}<br> Laticínios: ${arrayLaticinios}`)
}

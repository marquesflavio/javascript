function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criando um elemento que não está no HTML, diretamente pelo JavaScript
        img.setAttribute('id', 'foto') // é possível criar até um id para esse elemento criado no JS.
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-m.png')
            } else{
                img.setAttribute('src', 'idoso-m.png')
            }
        } else{
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21){
               img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            } else{
               img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos!`
        res.appendChild(img)//comando para carregar a imagem
    }
}
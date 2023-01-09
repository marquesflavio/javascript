function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano){
        window.alert ('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var sexo = document.getElementById('txtsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', "foto")

        if (sexo[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src','jovem-m.png')
            } else if (idade < 65){
                img.setAttribute('src','adulto-m.png')
            } else {
                img.setAttribute('src','idoso-m.png')
            }
        } else{
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src','jovem-f.png')
            } else if (idade < 65){
                img.setAttribute('src','adulto-f.png')
            } else {
                img.setAttribute('src','idoso-f.png')
            }

        }   
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos!`
        res.appendChild(img)//comando para carregar a imagem
    }

}

    


function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png' //var img tem o caminho declarado  em document.getElementById...
        document.body.style.background = '#c7b182'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){ 
        img.src = 'fototarde.png'
        document.body.style.background = '#c68277'
        msg2.innerHTML = 'Boa tarde!'
    } else {
        
        img.src = 'fotonoite.png'
        document.body.style.background = '#112e53'
        msg2.innerHTML = 'Boa noite!'
    }
}

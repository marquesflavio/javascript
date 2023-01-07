function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png' //var img tem ocaminho declarado  em document.getElementById...
        document.body.style.background = '#c7b182'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#c68277'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#112e53'
    }
}

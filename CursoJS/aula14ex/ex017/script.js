function contar(){
    var num = document.getElementById('txtnum')
    var res = document.querySelector('#res')

    if (num.value == ''){
        window.alert ('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var n = Number(num.value)
        var t = 1
        /* FORMA COM O FOR
        for(var t=1;t<=10;t++){
        res.innerHTML+=`${n} x ${t} = ${t*n} <br>`
        }
        */ 
        /*FORMA COM O WHILE
        while (t <= 10){
            res.innerHTML+=`${n} x ${t} = ${t*n} <br>`
            t++
       }
       */
       // FORMA COM O WHILE, MOSTRADO NO OPTION CRIADO.
       res.innerHTML= ''
       while(t <= 10){
        let item = document.createElement('option') //option é o elemento no HTML que compõe a tag select, para cada option, é criado um item
        item.text = `${n} x ${t} = ${t*n}`
        res.appendChild(item) //para mostrar o item criado.
        t++
       }

    }

}
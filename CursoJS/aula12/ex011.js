var idade = 30
if (idade < 16){
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18 || idade > 65){
        console.log("Voto opcional")
    } else{
        console.log ('Voto obrigatório')
    }
}

if (idade < 15){
    console.log('Criança')
} else if (idade >15 && idade < 18){
    console.log('Jovem')
} else{
    console.log("Adulto")
}
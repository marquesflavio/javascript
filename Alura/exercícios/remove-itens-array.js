var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
lista.splice(1,1) // remove 1 item apartir do índice 1[Vermelho]
console.log(lista)

/*Ao utilizar o método splice(), o primeiro parâmetro a ser informado é a posição do item a ser removido, e o segundo parâmetro informa quantos itens serão removidos a partir de sua posição.*/

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
lista.splice(2,0,"Roxo") // apartir do índice 2, remove 0 itens, acrescenta "Roxo"
console.log(lista)

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
lista.splice(2,2,"Verde","Laranja")//tira o item "Branco", substitue por 2 "Verde","Laranja"
console.log(lista)
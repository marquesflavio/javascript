function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) //função com chamada dentro dela mesmo (RECURSIVIDADE)
    }


} 
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!


n! = n x (n-1)!
1! = 1
*/
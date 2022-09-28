function soma(){
    let soma = 0;
    // O ARGUMENTS PROPORCIONA QUE EU NAO PASSE A QTD DE PARAMENTOS NA DEFINICAO DA FUNÇÃO.
    for (posicao in arguments){
        soma += arguments[posicao];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1, 2, 3));

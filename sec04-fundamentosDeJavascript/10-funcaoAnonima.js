function imprima (texto){
    console.log(texto);
}

// Armazenando uma função em uma variável
const imprimirSoma = function (num1, num2){
    console.log(num1 + num2);
}
imprimirSoma(5, 8);

// Armazenando uma função arrow em uma variável
const soma = (num1, num2) => {
    return num1 + num2;
}
console.log(soma(2, 6));

// Armazenando uma função com retorno implícito em uma variável
const subtracao = (a, b) => a - b;
imprima(subtracao(10, 8));
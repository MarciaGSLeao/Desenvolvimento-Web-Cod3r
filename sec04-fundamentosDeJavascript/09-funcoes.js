// ADEUS CONSOLE.LOG \o/
function imprima(texto) {
    console.log(texto);
}

function soma(num1, num2) {
   return resultado = num1 + num2;
    // imprima(resultado); // É PERMITIDO CHAMAR UMA FUNÇÃO DENTRO DA OUTRA.
}

imprima('felipe');
imprima(soma(4, 6));
imprima(soma(2)); // a saída será um NaN, pois o segundo parâmetro não foi atribuído.

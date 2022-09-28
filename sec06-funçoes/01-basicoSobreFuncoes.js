// CRIANDO UMA FUNÇÃO DE FORMA LITERAL
function func1() {
    // AQUI PODE OU NÃO TER SENTENÇAS DE CÓDIGOS;
    // SE NÃO HOUVER, ELA RETORNARÁ UM UNDEFINED.
}


// ARAMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL
const func2 = function () {
    // AQUI PODE OU NÃO TER SENTENÇAS DE CÓDIGOS;
}


// ARMAZENANDO EM UM ARRAY
const array = [function (a, b) {return a + b}, func1, func2];
console.log(array[0](2, 5));


// ARMAZENANDO EM UM OBJETO
const obj = {};
obj.falar = function () {return 'opa...'}
console.log(obj.falar());

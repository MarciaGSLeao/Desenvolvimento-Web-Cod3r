{
    {
        {
            {
                {
                    var teste = 'Qualquer coisa!';
                    console.log(teste);
                }
            }
        }
    }
}
console.log(teste);
/* No exemplo acima, podemos perceber que declarar um avariável com Var torna possível chamar
 * essa variável dentro de um bloco de código onde ela estiver inserida, como fora do bloco de
 * código. 
 * Isso porém não é possíve se a variável for declarada com Var dentro de uma função.
 * Observar exemplo abaixo:
*/

function teste2() {
    var testando = 123;
    console.log(testando);
}

teste2(); // Quando se chamo a função, a variável é 'chamada', pois a mesma faz parte do escopo da função.
//console.log(testando); // Quando se chama diretamente a variável que foi declarada dentro da função, não é possível executar.

var numero = 1;

{
    var numero = 10;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero) // Nesse caso, será impresso o valor 10, pois vai sobescrever a var declarada na linha 29.
console.log('fora = ', numero) // Nesse caso, será impresso o valor 10, pois vai sobescrever a var declarada na linha 29.





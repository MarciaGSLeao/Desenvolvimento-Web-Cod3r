/* 
 * JSON É UM FORMATO TEXTUAL.
 * OBJETO EM JAVASCRIPT É UMA COLEÇÃO DE CHAVE-VALOR. É POSSÍVEL QUE DENTRO DE UM OBJETO JS
 * INSERIR OUTROS OBJETOS.
*/

const prod1 = {};
prod1.descricao = 'blusa';
prod1.preco = 29.9;
console.log(prod1);

let prod2 = {
    descricao: 'caneta',
    preco: 5.75,
    cor: 'azul',
    informacoesExtras: {
        alturaEmCentimetro: 18,
        pesoEmGramas: 20 
    }

}
console.log(prod2);
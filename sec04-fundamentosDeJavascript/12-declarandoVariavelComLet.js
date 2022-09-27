let numero = 1;
{
    let numero = 2; // O let atua com o escopo dentro do bloco
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

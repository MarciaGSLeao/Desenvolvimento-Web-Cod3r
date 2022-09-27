const notas = [8.2, 7.3, 4.5, 9.0];

let soma = 0;
for (let p = 0; p < notas.length; p++){
    soma += notas[p];
}
console.log(soma);

let media = soma / notas.length

if (media >= 7) {
    console.log(`Aprovado! \nMédia = ${media}`);
}else{
    console.log(`Reprovado! \nMédia = ${media}`);
}

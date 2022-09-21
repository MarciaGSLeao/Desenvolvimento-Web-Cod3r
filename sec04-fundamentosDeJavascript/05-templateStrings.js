// CONSIDERA-SE UTILIZANDO O SINAL E CRASE.
// EX:

let nome = 'Felipe';
const concatenacao = 'Olá ' + nome + '!';
const templateString = `\nOlá ${nome}!`

console.log(concatenacao, templateString);

// EXPRESSÕES:
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase();
console.log(`Ei...${up('cuidado')}!`)
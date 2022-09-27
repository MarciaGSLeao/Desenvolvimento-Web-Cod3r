const notas = [8.2, 7.3, 4.5, 9.0];

for (let position in notas) {
    console.log(`Posição ${position} => ${notas[position]}`);
}

console.log();

const pessoa = {
    nome: "Márcia",
    sobrenome: "Gameleira",
    idade: 32,
    peso: 75
}

for(let atributo in pessoa) {
    console.log(`${atributo} => ${pessoa[atributo]}`);
}

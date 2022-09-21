let nome = "Márcia Araújo Gameleira de Souza Leão"

console.log(nome.charAt(1));
console.log(nome.indexOf("G"));
console.log(nome.substring(0, 6));
console.log(nome.replace("G", "g"));

// O MÉTODO SPLIT POSSIBILITA SEPARAR OS ELEMENTOS DA STRING E ARMAZENAR EM UM OBJETO DO TIPO ARRAY.
let nomes = nome.split(" "); 
console.log(nomes);
console.log(typeof nomes);

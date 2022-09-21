// TIPAGEM DINÂMICA TBM PODE SER CHAMADA DE TIPAGEM FRACA.
// EXs:
let qualquer = 'legal';
console.log(qualquer);
console.log(typeof qualquer);

// MESMO A VARIÁVEL TENDO SIDO INICIALMENTE 'TIPADA' DE UM TIPO,
// ELA PODE SER SUBESCRITA POR UMA VARIÁVEL DE OUTRO TIPO. 
qualquer = 3;
console.log(qualquer);
console.log(typeof qualquer);
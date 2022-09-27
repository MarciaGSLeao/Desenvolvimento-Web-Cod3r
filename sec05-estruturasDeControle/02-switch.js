const printResult = function (media){
    switch (Math.floor(media)){
        case 10:
        case 9:
            console.log("Quadro de Honra!");
            break;
        case 8: case 7:
            console.log("Parabéns!");
            break;
        case 6: case 5: 
            console.log('Recuperação.');
            break;
        case 4: case 3: case 2: case 1:
            console.log(`Reprovado.`);
            break;
        default:
            console.log("Nota inválida");
            break;
    }
}

printResult(8);
printResult('sss');

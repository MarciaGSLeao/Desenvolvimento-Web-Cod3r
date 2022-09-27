function getIntRandomBetween(max, min) {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

let num = 0;

while(num != -1){
    num = getIntRandomBetween(-1, 10);
    console.log(`Número sorteado: ${num}`);
}

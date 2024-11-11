// comparar o tempo que os carros chegam no destino,
// se o tempo do carro da frente for menor ou igual ao tempo do carro de trás, então os carros formam um grupo

function carFleet(target, position, speed) {
    let pair = position.map((pos, i) => [pos, speed[i]]);
    pair.sort((a, b) => b[0] - a[0]); // ordenar do mais distante do destino para o mais próximo
    let stack = [];
    for (let [pos, speed] of pair) {
        let time = (target - pos) / speed;
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }
    return stack.length;
}

console.log(carFleet(target = 10, position = [1,4], speed = [3,2])); // 1
console.log(carFleet(target = 10, position = [4,1,0,7], speed = [2,2,1,1])); // 3
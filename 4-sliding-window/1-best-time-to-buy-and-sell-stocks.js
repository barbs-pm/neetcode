// setar 2 pointers no inicio do array
// enquanto o segundo pointer for menor que o tamanho do array
// se o numero atual for maior que o anterior
// calcular o lucro e salvar o maior lucro
// se o numero atual for menor que o anterior setar o primeiro pointer no segundo pointer

function maxProfit(prices) {
    let maxProfit = 0;
    let p1 = 0;
    let p2 = 1;

    while (p2 < prices.length) {
        if (prices[p2] > prices[p1]) {
            maxProfit = Math.max(maxProfit, prices[p2] - prices[p1]);
        } else {
            p1 = p2;
        }
        p2++;
    }
}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1,2,3,4,5])); // 4

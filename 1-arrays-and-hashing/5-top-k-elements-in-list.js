// criar um hash pra guardar a contagem de cada elemento
// criar um array de frequencia pra guardar os elementos de acordo com a frequencia => [[], [1, 2], [3]]
// pra cada elemento do hash, adiciona o resultado no array de frequencia
// percorre o array de freq de tras pra frente e adiciona os elementos no resultado

function topKFrequent(nums, k) {
    const hash = new Map();
    const freq = Array(nums.length + 1).fill().map(() => []);

    nums.forEach((num) => {
        hash.set(num, (hash.get(num) || 0) + 1);
    });

    hash.forEach((value, key) => {
        freq[value].push(key);
    });

    const result = [];
    for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...freq[i]);
    }

    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2], 2)); // [1, 2]

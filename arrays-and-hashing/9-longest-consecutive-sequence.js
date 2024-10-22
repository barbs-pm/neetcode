// criar um hash pra guardar a contagem de cada elemento e o tamanho da sequencia
// pra cada elemento, se ele não estiver no hash, pega o tamanho da sequencia do elemento anterior e do proximo elemento
// atualiza o tamanho da sequencia do elemento atual e dos elementos anterior e proximo
// atualiza o tamanho da sequencia mais longa

function longestConsecutive(nums) {
    const hash = new Map();
    let longest = 0;

    nums.forEach((num) => {
        if (!hash.has(num)) {
            // se o elemento não estiver no hash, pega o tamanho da sequencia do elemento anterior e do proximo elemento
            const left = hash.get(num - 1) || 0;
            const right = hash.get(num + 1) || 0;
            // atualiza o tamanho da sequencia do elemento atual e dos elementos anterior e proximo
            const sum = left + right + 1;

            // atualiza o tamanho da sequencia mais longa
            hash.set(num, sum);
            hash.set(num - left, sum);
            hash.set(num + right, sum);

            longest = Math.max(longest, sum);
        }
    });

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9

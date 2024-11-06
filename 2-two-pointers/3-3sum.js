// comeca ordenando, pois se achat um numero positivo, nao tem como achar 3 numeros que somem 0
// se o numero atual for igual ao anterior, pula
// pra cada numero, usar 2 pointers pra achar os outros 2 numeros
// se a soma for maior que 0, decrementa o ultimo
// se a soma for menor que 0, incrementa o primeiro
// se achar a soma, salva a combinacao, e procura a proxima combinacao, pulando os numeros repetidos
// O(n^2) pois tem 2 loops, um pra percorrer o array e outro pra achar os outros 2 numeros

function threeSum(nums) {
    nums.sort((a, b) => a - b); // O(nlogn)
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // como ta ordenado, se for positivo entao
        // nao tem mais soma q resulta 0
        if (nums[i] > 0) break;

        // pula repetido
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // usar 2 pointers pra achar os outros 2 numeros
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                // pular os numeros repetidos
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]

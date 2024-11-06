
// salvar todos os valores q ja visitamos no hash com o indice
// se o complemento do valor atual ja estiver no hash, retornar o indice do complemento e o indice atual

function twoSum(nums, target) {
    const visitedNumbers = new Map();

    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        if (visitedNumbers.has(val)) {
            return [visitedNumbers.get(val), i];
        }
        visitedNumbers.set(nums[i], i);
    }
}


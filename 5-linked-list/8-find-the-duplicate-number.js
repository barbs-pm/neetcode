// o algoritmo procura por um ponto de encontro, onde o indice do array é igual ao valor do elemento
// a partir desse ponto de encontro, o algoritmo encontra o valor duplicado
// Time complexity: O(n)

function findDuplicate(nums) {
    let slow = 0;
    let fast = 0;

    // encontrar o ponto de encontro
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) break;
    }

    // encontrar o valor duplicado
    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];

        if (slow === slow2) return slow;
    }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([1, 1])); // 1
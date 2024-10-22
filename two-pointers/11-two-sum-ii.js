// iterar os elementos do array, somando o primeiro com o último
// se a soma for maior que o target, decrementar o último
// se a soma for menor que o target, incrementar o primeiro
// pois o array está ordenado, então se a soma for maior que o target,
// o próximo número só pode ser menor, então decrementa o último e vice-versa

function twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else {
            return [l+1, r+1]
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
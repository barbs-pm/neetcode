// comparar o valor do meio com o inicio e o fim
// se for >= q o inicio, a esquerda ta ordenada
// se for <= q o fim, a direira esta ordenada
// se a metadade esquerda ta ordenada, e o target ta entre l e mid => r=mid-1
// se a metade direta ta ordenada, e o target ta entre mid e r => l=mid+1
// senao busca na metade oposta

function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midElem = nums[mid];

        if (target === midElem) {
            return mid;
        }

        if (midElem >= nums[l]) {
            // Metade esquerda está ordenada
            if (target >= nums[l] && target < midElem) {
                r = mid - 1; // procurar na esquerda
            } else {
                l = mid + 1; // procurar na direita
            }
        } else {
            // Metade direita está ordenada
            if (target > midElem && target <= nums[r]) {
                l = mid + 1; // procurar na direita
            } else {
                r = mid - 1; // procurar na esquerda
            }
        }
    }

    return -1;
}

console.log(search(nums = [3,4,5,6,1,2], target = 1)); // 4
console.log(search(nums = [3,5,6,0,1,2], target = 4)); // -1
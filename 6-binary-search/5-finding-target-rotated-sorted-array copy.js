// Se o valor do meio é maior que o último elemento, 
// isso significa que o mínimo está à direita. 
// Se for menor ou igual, o mínimo pode estar na esquerda.

function findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    const lastNum = nums[r];

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midElem = nums[mid];
        
        if (l === r) {
            return nums[l];
        }

        // ta na direita
        if (midElem > lastNum) {
            l = mid + 1;
        } else if (midElem <= lastNum) {
            // ta na esquerda
            r = mid;
        } 
    }
}

console.log(findMin(nums = [3,4,5,6,1,2])); // 1
console.log(findMin(nums = [4,5,0,1,2,3])); // 0
console.log(findMin(nums = [4,5,6,7])); // 4
function sortedSquares(nums) {
    let p1 = 0;
    let p2 = nums.length - 1;
    let i = nums.length - 1;

    const arr = Array(nums.length).fill(0);
    while (p1 <= p2) {
        if (Math.abs(nums[p1]) > Math.abs(nums[p2])) {
            arr[i] = Math.abs(nums[p1] * nums[p1]);
            p1++;
        } else {
            arr[i] = Math.abs(nums[p2] * nums[p2]);
            p2--;
        }
        i--
    }
    return arr;
};

console.log(sortedSquares(nums = [-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares(nums = [-7,-3,2,3,11])); // [4,9,9,49,121]

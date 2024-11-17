function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] > target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(search([-1,0,2,4,6,8], 3)); // -1
console.log(search([-1,0,2,4,6,8], 4)); // 3

// Time complexity: O(logn)
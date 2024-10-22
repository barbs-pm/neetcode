function hasDuplicates(nums) {
    let hash = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return true;
        }
        hash.add(nums[i]);
    }
    return false;
}

hasDuplicates([1, 2, 3, 1]); // true
hasDuplicates([1, 2, 3, 4]); // false
function characterReplacement(s, k) {
    let result = 0;
    const count = new Map();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        let len = r - l + 1;
        count.set(s[r], (count.get(s[r]) || 0) + 1);

        if (len - Math.max(...count.values()) > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l++;
            len--;
        }
        result = Math.max(result, len);
    }

    return result;
}

console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4
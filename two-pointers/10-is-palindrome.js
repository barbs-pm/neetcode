function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('a')); // true

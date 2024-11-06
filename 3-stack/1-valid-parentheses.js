function isValid(s) {
    const openToClose = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const stack = [];

    for (const char of s) {
        // se for abertura, adiciona na stack
        if (openToClose[char]) {
            stack.push(char);
        } else {
            // se for um fechamento, ve se o correspondente ta certo
            const last = stack.pop();
            if (openToClose[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('{}[]()'));
console.log(isValid('((({{}})))'));
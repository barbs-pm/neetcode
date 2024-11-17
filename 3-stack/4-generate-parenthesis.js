// a quantidade de parenteses fechado
// sempre tem q ser menor q a qnt de abertos
function generateParenthesis(n) { 
    const res = [];
    const stack = [];

    function backtrack(openN, closeN) {
        if (openN === closeN && openN === n) {
            res.push(stack.join(""));
        }

        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closeN);
            stack.pop();
        }
        
        if (closeN < openN) {
            stack.push(')');
            backtrack(openN, closeN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    return res;
}

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
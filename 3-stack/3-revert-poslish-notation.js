function evalRPN(tokens) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];
    tokens.forEach(char => {
        if (!operators.includes(char)) {
            stack.push(parseInt(char));
        } else {
            const val1 = stack.pop();
            const val2 = stack.pop();
            if (char === operators[0]) {
                stack.push(val1 + val2);
            } else if (char === operators[1]) {
                stack.push(val2 - val1);
            } else if (char === operators[2]) {
                stack.push(val1 * val2);
            } else {
                stack.push(Math.trunc(val2 / val1));
            }
        }
    });
    return stack.pop();
}

console.log(evalRPN(["1","2","+","3","*","4","-"])); // 5
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
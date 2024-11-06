class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * Pra cada elemento da stack, a gente salva na minStack qual o menor valor dela mesma
     * stack [-2, 0, -3, 0]
     * min   [-2, -2, -3, -3]
     * caso tenha um pop, a gente ainda tem o menor valor salvo
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // pega o menor valor, o atual ou o ultimo
        val = Math.min(
            val,
            this.minStack.length === 0 
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(9);
minStack.push(5);
minStack.push(7);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
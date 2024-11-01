function dailyTemperatures(temperatures) {
    const res = Array(temperatures.length).fill(0);
    const stack = []; // pair [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        const temperature = temperatures[i];
        // monotonic decreasing stack
        // enquanto a temperatura for maior, vai atualizando os indices
        while (stack.length > 0 && temperature > stack[stack.length - 1][0]) {
            const [stackT, stackInd] = stack.pop();
            res[stackInd] = i - stackInd;
        }

        stack.push([temperature, i]);
    }
    return res;
}

console.log(dailyTemperatures([30,38,30,36,35,40,28])); // [1,4,1,2,1,0,0]
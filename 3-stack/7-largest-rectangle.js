function largestRectangleArea(heights) {
    const n = heights.length;
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i <= n; i++) {
        // enquanto a altura atual for menor que a altura do ultimo elemento da pilha
        while (stack.length && (i === n || heights[stack[stack.length - 1]] > heights[i])) {
            // calcular a area da barra atual
            const h = heights[stack.pop()];
            // se a pilha estiver vazia após o pop, 
            // significa que não há outra barra à esquerda para limitar a largura, então w = i
            // ou o índice no novo topo da pilha é a última barra menor que h antes da barra i
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    return maxArea;
}

console.log(largestRectangleArea(heights = [7,1,7,2,2,4])); // 8
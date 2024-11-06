// Primeiro, ela faz um loop que vai da esquerda pra direita, 
// multiplicando todos os números que estão antes de cada posição. 
// Assim, você já fica com uma parte do resultado.

// Depois, ela faz outro loop, mas agora da direita pra esquerda. 
// Aqui, ela multiplica o que já estava na posição pelo produto de 
// todos os números que estão depois dela.

function productExceptSelf(nums) {
    const result = Array(nums.length).fill(1);
    const n = nums.length;

    // calcular a multiplicacao dos elementos a esquerda
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // calcular a multiplicacao dos elementos a direita, multiplicando pelo resultado anterior
    // posfix = 1, pois o ultimo elemento não tem nenhum elemento a direita
    let posfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= posfix;
        posfix *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
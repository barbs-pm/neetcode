function countBinarySubstrings(s) {
    let prev = 0; // Conta do grupo anterior
    let curr = 1; // Conta do grupo atual
    let result = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            // Se o atual é igual ao anterior, aumente o contador do grupo atual
            curr++;
        } else {
            // Se mudamos de grupo, adicione `min(prev, curr)` ao resultado
            result += Math.min(prev, curr);
            // Atualize `prev` para `curr` e reinicie `curr` para 1
            prev = curr;
            curr = 1;
        }
    }
    
    // Adiciona a última comparação
    result += Math.min(prev, curr);
    return result;
};

console.log(countBinarySubstrings(s = "00110011")); // 6
console.log(countBinarySubstrings(s = "10101")); // 4
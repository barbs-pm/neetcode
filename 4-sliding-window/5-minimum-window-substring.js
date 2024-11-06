function minWindow(s, t) {
    const map = new Map();

    // Mapeia os caracteres de 't' e suas contagens
    for (const x of t) {
        map.set(x, (map.get(x) || 0) + 1); // Incrementa a contagem de cada caractere em t
    }

    let matched = 0; // Contador para verificar quando todos os caracteres de 't' são encontrados
    let start = 0; // Ponteiro para o início da janela
    let minLen = s.length + 1; // Tamanho mínimo da janela que encontraremos
    let subStr = 0; // Posição inicial da substring válida

    // Ponteiro que expande a janela para a direita
    for (let endWindow = 0; endWindow < s.length; endWindow++) {
        const right = s[endWindow]; // Caractere atual na janela da direita
        
        // Se o caractere estiver no mapa (ou seja, faz parte de 't')
        if (map.has(right)) {
            map.set(right, map.get(right) - 1); // Reduz a contagem do caractere no mapa
            // Se a contagem for zero, significa que encontramos todos os exemplares deste caractere
            if (map.get(right) === 0) matched++;
        }

        // Enquanto a janela contiver todos os caracteres de 't'
        while (matched === map.size) {
            // Atualiza o tamanho mínimo da janela se encontrarmos uma janela menor
            if (minLen > endWindow - start + 1) {
                minLen = endWindow - start + 1;
                subStr = start; // Guarda a posição inicial da janela mínima
            }
            
            // Tenta encolher a janela removendo o caractere à esquerda
            const deleted = s[start++]; // Caractere que será removido da janela
            // Se o caractere removido fizer parte de 't'
            if (map.has(deleted)) {
                // Se a contagem for zero, significa que perdemos um caractere necessário
                if (map.get(deleted) === 0) matched--;
                map.set(deleted, map.get(deleted) + 1); // Reinsere o caractere no mapa
            }
        }
    }
    
    // Se não encontramos uma janela válida, retorna '' (string vazia)
    return minLen > s.length ? '' : s.substring(subStr, subStr + minLen);
}

const s = "OUZODYXAZV", t = "XYZ";
console.log(minWindow(s, t)); // "YXAZ"
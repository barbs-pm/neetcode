// salvar dois hashs com a frequencia de cada caractere de s1 e s2
// criar a janela deslizante
// se a contagem de s1 e da jaanela forem iguais, retornar true
// se a contagem de s1 e da janela forem diferentes, deslizar a janela

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    // save the frequency of each character
    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // verificar se s1 ja eh permutacao de s2
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === windowCount[i]) {
            matches++;
        }
    }

    // se nao for, ja cria a janela
    let l = 0;
    let r = s1.length;
    while (r < s2.length) {
        if (matches === 26) {
            return true;
        }

        // a = 0, b = 1, c = 2...
        // aumenta a janela pra direita
        let index = s2.charCodeAt(r) - 'a'.charCodeAt(0)
        windowCount[index]++; // aumenta a contagem da letra q ta entrando na janela
        if (s1Count[index] === windowCount[index]) {
            matches++;
        } else if (s1Count[index] + 1 === windowCount[index]) {
            // se a contagem for maior do que a qnt da janela
            matches--;
        }

        // diminui a janela a esquerda
        index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
        windowCount[index]--; // diminui a contagem da letra q ta saindo da janela
        if (s1Count[index] === windowCount[index]) {
            matches++;
        } else if (s1Count[index] - 1 === windowCount[index]) {
            matches--;
        }

        l++; 
        r++;
    }

    return matches === 26;
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
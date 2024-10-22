// tem que ter o mesmo número de letras
// adicionar todas as letras num hash
// iterar o array e decrementar, o valor, se nao existir eh pq nao eh anagrama

function isAnagram(s, t) {
    const hash = new Map();
    if (s.length !== t.length) {
        return false;
    }

    for (const letter of s) {
        hash.set(letter, hash.get(letter) + 1 || 1);
    }

    for (const letter of t) {
        if (!hash.has(letter) || hash.get(letter) === 0) {
            return false;
        }
        hash.set(letter, hash.get(letter) - 1);
    }

    return true;
}

isAnagram('anagram', 'nagaram'); // true
isAnagram('rat', 'car'); // false
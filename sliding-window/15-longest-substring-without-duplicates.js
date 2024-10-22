// usar sliding window pra achar substring sem repeticao
// criar um set pra guardar os elementos da substring
// criar um ponteiro pra esquerda e um pra direita
// se o elemento da direita ja estiver no set, remover os elementos da esquerda ate remover o elem repetido
// adicionar o elemento no set e atualizar o maior tamanho da substring

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let length = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        length = Math.max(length, right - left + 1);
    }
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
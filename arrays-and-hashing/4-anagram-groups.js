// criar uma hash table
// cada string, ordernar os caracteres e usar como indice
// se o indice ja existe, adicionar a string ao array
// se nao, criar um array com a string
// retornar os arrays

function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
        const key = [...str].sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
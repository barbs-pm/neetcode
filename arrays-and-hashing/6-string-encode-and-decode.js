// pra fazer o encode, separar o tamanho da string do conteudo com um # e concatenar tudo
// pois no decode, a gente vai precisar do tamanho da string pra saber onde ela termina
// e o # vai ser o separador entre o tamanho e o conteudo, garantindo que a string não tenha um # no meio

function encode(strs) {
    return strs.map(str => `${str.length}#${str}`).join('');
}

function decode(str) {
    // declarar o array pra ir concatenando os elementos
    let result = [];
    let i = 0;

    // enquanto não chegar no final da string
    while (i < str.length)  {
        // encontrar o tamanho da string original
        let j = i
        while (str[j] != '#') {
            j++
        }
        // converter o tamanho pra inteiro
        const length = parseInt(str.substring(i, j), 10)
        // i é o inicio da string, j é o final da string
        i = j + 1
        j = i + length
        // adicionar a string no resultado
        res.push(str.substring(i, j))
        // i é o inicio da proxima string
        i = j
    }
}

console.log(encode(['abc', 'def'])); // 6#abc3#def
console.log(decode('6#abc3#def')); // ['abc', 'def']
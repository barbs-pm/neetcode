// nao precisa saber qual o maior valor do outro lado qnd for subtrair,
// se vc tem o menor valor vc ja sabe q eh esse lado q ta limitando
// pra nao vazar agua

function trap(height) {
    if (!height.length) {
        return 0;
    }

    let l = 0;
    let r = height.length - 1;
    let lMax = height[l];
    let rMax = height[r];
    let res = 0;

    // enquanto nao se encontraram no meio
    while (l < r) {
        // não importa quão alta seja a coluna à direita, 
        // a água só pode subir até o nível de lMax, 
        // porque esse é o lado mais baixo.
        // o lado esquerdo limita a qnt de agua
        if (lMax < rMax) {
            l++;
            lMax = Math.max(lMax, height[l]);
            res += lMax - height[l];
        } else {
            // o lado direito está limitando a qtd de água
            r--;
            rMax = Math.max(rMax, height[r]);
            res += rMax - height[r];
        }
    }
    return res;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([0,2,0,3,1,0,1,3,2,1])); // 9
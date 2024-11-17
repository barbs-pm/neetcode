// koko tem q comer a menor qnt possivel de banana em H horas
// usar busca binaria pra encontrar K
// eh um valor entre 1 e o valor maximo das pilhas,
// ao inves de tentar 1 por um, da pra usar busca binaria pra achar o valor

// Time complexity: O(n∗logm) where n is the number of piles and m is the maximum size of a pile.
function minEatingSpeed(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let res = r;

    while (l <= r) {
        const k = Math.floor((l + r) / 2);

        let totalTime = 0;
        for (const p of piles) {
            totalTime += Math.ceil(p / k);
        }
        if (totalTime <= h) {
            res = k;
            r = k - 1;
        } else {
            l = k + 1;
        }
    }
    return res;
}

// 1 b/h = 10 horas > 9
// 2 b/h = 6 horas => 1/2=1 + 4/2=2 + 3/2=1 + 2/2=2
console.log(minEatingSpeed(piles = [1,4,3,2], h = 9)); // 2
console.log(minEatingSpeed(piles = [25,10,23,4], h = 4)); // 25

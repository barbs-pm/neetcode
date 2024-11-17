// time: O(m * n) -> m = rows, n = cols
// space: O(m * n) -> worst case all oranges are rotten

function orangesRotting(grid) {
    if (!grid || !grid.length) return 0;

    const q = [];
    let fresh = 0;
    let minutes = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // se for estragada adiciona na fila
            if (grid[r][c] === 2) {
                q.push([r, c]);
            } else if (grid[r][c] === 1) {
                // se for fresca incrementa o contador
                fresh++;
            }
        }
    }

    while (q.length && fresh) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            // pega a laranja estragada
            const [r, c] = q.shift();
            verifyFruit(r + 1, c);
            verifyFruit(r - 1, c);
            verifyFruit(r, c + 1);
            verifyFruit(r, c - 1);
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;

    function verifyFruit(r, c) {
        // se a laranja estiver fora da grade ou não for fresca, retorna
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length || grid[r][c] !== 1) return;
        grid[r][c] = 2;
        fresh--;
        q.push([r, c]);
    }
}

console.log(orangesRotting(grid = [[1,1,0],[0,1,1],[0,1,2]])); // 4
console.log(orangesRotting(grid = [[1,0,1],[0,2,0],[1,0,1]])); // -1
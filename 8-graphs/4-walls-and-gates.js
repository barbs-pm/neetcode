// time complexity: O(n * m) because we visit every cell once, same as space complexity
// basic idea: start from each gate, do a BFS to find the distance to each cell
// then we can find the minimum distance to a gate for each cell
// we know the dist is the shortest path because we are doing a BFS
// it will process the cells in order of distance from the gate 

function islandsAndTreasure(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let visit = new Set();
    let q = [];

    function addCell(r, c) {
        // se a celula ta fora do grid, se ja foi visitada, ou se eh uma parede, nao adiciona
        // Math.min(r, c) < 0 
        if (Math.min(r, c) < 0 || r === ROWS || c === COLS ||
            visit.has(r + ',' + c) || grid[r][c] === -1
        ) {
            return;
        }
        // marca a celula como visitada e adiciona na fila
        visit.add(r + ',' + c);
        q.push([r, c]);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                q.push([r, c]);
                visit.add(r + ',' + c);
            }
        }
    }

    let dist = 0;
    while (q.length) {
        for (let i = q.length; i > 0; i--) { // Percorre todas as células na fila
            let [r, c] = q.shift(); // remove a 1 celula da fila
            grid[r][c] = dist; // marca a celula com a distancia
            // adiciona as celulas vizinhas na fila
            addCell(r + 1, c);
            addCell(r - 1, c);
            addCell(r, c + 1);
            addCell(r, c - 1);
        }
        dist += 1;
    }
    return grid;
}

const input = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
];
console.log(islandsAndTreasure(input));
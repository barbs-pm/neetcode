function pacificAtlantic(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pacific = new Set();
    let atlantic = new Set();

    for (let i = 0; i < Math.max(rows, cols); i++) {
        // if i < rows, it will check the first column
        if (i < rows) {
            dfs(i, 0, pacific);
            dfs(i, cols - 1, atlantic);
        }
        // if i < cols, it will check the last row
        if (i < cols) {
            dfs(0, i, pacific);
            dfs(rows - 1, i, atlantic);
        }
    }

    function dfs(r, c, ocean) {
        let key = `${r}-${c}`;
        if (ocean.has(key)) return; // Evitar ciclos
    
        ocean.add(key); // Marcar como visitado
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            // Verificar se está dentro dos limites e se o fluxo é válido
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && heights[nr][nc] >= heights[r][c]) {
                dfs(nr, nc, ocean);
            }
        }
    }
    

    let res = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // if the cell is in both sets, add it to the result
            if (pacific.has(`${i}-${j}`) && atlantic.has(`${i}-${j}`)) {
                res.push([i, j]);
            }
        }
    }

    return res;
}
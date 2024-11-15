 // time complexity: O(n * m) because we visit every cell once, same as space complexity

function maxAreaOfIsland(grid) {
    const ROWS = grid.length;
    const COLUMNS = grid[0].length;
    let maxSize = 0;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLUMNS; c++) {
            if (grid[r][c] === 1) {
                maxSize = Math.max(maxSize, dfs(r, c));
            }
        }
    }

    function dfs(r, c) {
        // check if out of bounds or cell is water
        if (r < 0 || c < 0 || r >= ROWS || c >= COLUMNS || grid[r][c] === 0) {
            return;
        }
        grid[r][c] = 0;
        return 1 + (
            dfs(r + 1, c) +
            dfs(r - 1, c) +
            dfs(r, c + 1) +
            dfs(r, c - 1)
        );
    }

    return maxSize;
}
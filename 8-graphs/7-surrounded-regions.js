// capturar todas as bordas q nao sao X, mudar pra T
// oq nao eh border e nao eh X, muda pra X tbm
// entao muda tudo q eh T pra O
// time: O(m * n)

function solve(board) {
    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c) {
        if (r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            board[r][c] !== 'O') return;

        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    // capture the unsurrounded regions (O -> T)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const isBorder = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
            const isO = board[r][c] === 'O';
            if (isBorder && isO) {
                dfs(r, c);
            }
        }
    }

    // capture the surrouded regions (O -> X)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
        }
    }

    // uncapture the unsurrounded regions (T -> O)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) { 
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
}
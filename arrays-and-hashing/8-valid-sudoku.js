// pra cada linha, coluna e caixa, criar um map pra guardar os elementos
// pra cada elemento, verificar se ele já está na linha, coluna ou caixa
// se estiver, retornar falso
// se não estiver, adicionar o elemento no map da linha, coluna e caixa

function validSudoku(board) {
    const rows = new Map();
    const cols = new Map();
    const boxes = new Map();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const curr = board[r][c];
            if (curr === '.') {
                continue;
            }

            const isInCol = cols.get(c)?.has(curr)
            const isInRow = rows.get(r)?.has(curr)
            const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            const isInBox = boxes.get(box)?.has(curr)

            if (isInCol || isInRow || isInBox) {
                return false
            }

            cols.set(c, new Set(cols.get(c)).add(curr))
            rows.set(r, new Set(rows.get(r)).add(curr))
            boxes.set(box, new Set(boxes.get(box)).add(curr))
        }
    }

    return true;
}

const board1 = [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
];
console.log(validSudoku(board1)); // true

const board2 = [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
];
console.log(validSudoku(board2)); // false
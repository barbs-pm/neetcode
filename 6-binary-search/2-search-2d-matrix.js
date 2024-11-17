function searchMatrix(matrix, target) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    // calcula em q linha esta usando busca binaria
    let top = 0;
    let bot = ROWS - 1;
    while (top <= bot) {
        const row = Math.floor((top + bot) / 2);
        if (target > matrix[row][COLS - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bot = row - 1;
        } else {
            break;
        }
    }

    // se top passou de bot, significa que não encontramos uma linha válida, então retornamos false.
    if (!(top <= bot)) {
        return false;
    }

    // calcula em q coluna esta usando busca binaria
    const row = Math.floor((top + bot) / 2);
    let l = 0;
    let r = COLS - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target > matrix[row][mid]) {
            l = mid + 1;
        } else if (target < matrix[row][mid]) {
            r = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}

console.log(searchMatrix(matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10)); // true
console.log(searchMatrix(matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15)); // false

// Time complexity: O(logn + logm) where n is the number of rows and m is the number of columns.
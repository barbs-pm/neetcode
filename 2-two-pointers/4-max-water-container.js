// usar 2 pointers pra achar a area maxima entre 2 numeros
// a area é a menor altura * a distancia entre os 2 numeros
// pra maximizar a area, a gente tem que maximizar a altura e a distancia
// entao a gente começa com os 2 numeros mais distantes
// e vai aproximando, incrementando o menor numero e decrementando o maior

function maxArea(heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
    while (left < right) {
        const currentArea = Math.min(heights[left], heights[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
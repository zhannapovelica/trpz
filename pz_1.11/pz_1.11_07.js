function modifyDiagonal(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === j) {
                if (matrix[i][j] < 0) {
                    matrix[i][j] = 0;
                } else {
                    matrix[i][j] = 1;
                }
            }
        }
    }
    return matrix;
}
const myMatrix = [
    [2, -3, 5],
    [1, -7, 8],
    [-4, 6, -9]
];
const modifiedMatrix = modifyDiagonal(myMatrix);
console.log(modifiedMatrix);
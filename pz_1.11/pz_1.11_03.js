function sortedAndFlattered(matrix) {
    const flatArray = matrix.flat();
    const sortedArray = flatArray.sort((a, b) => a - b);
    return sortedArray;
}

const arr1 = prompt("Enter first array: ");
const arr11 = arr1.split(" ").map(Number);
const arr2 = prompt("Enter second array: ");
const arr22 = arr2.split(" ").map(Number);
const arr3 = prompt("Enter third array: ");
const arr33 = arr3.split(" ").map(Number);

const matrix = [arr11, arr22, arr33];
const result = sortedAndFlattered(matrix);
console.log(result); 
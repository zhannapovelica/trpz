function removeDuplicates(arr) {
    const uniqueValues = new Set(arr);
    const resultArray = Array.from(uniqueValues);
    return resultArray;
}
const inputArray = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = removeDuplicates(inputArray);
console.log("Array without repeat:", uniqueArray);
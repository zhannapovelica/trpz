function reverseAndSquare(arr) {
    const reversedArray = arr.slice().reverse();
    const modifiedArray = reversedArray.map((value) => {
        if (typeof value === 'number') {
            return value ** 2;
        } else {
            return value; 
        }
    });
    return modifiedArray;
}
const myArray = [1, 2, -3, 'hello', 4];
const result = reverseAndSquare(myArray);
console.log(result);
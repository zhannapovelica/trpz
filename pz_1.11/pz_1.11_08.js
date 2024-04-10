function calculate(arr) {
    if (arr.length === 0) {
        console.log("Array is empty so u can't find average.");
        return;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log("Average: " + average.toFixed(2));
}
const myArray = [10, 20, 30, 40, 50];
calculate(myArray);
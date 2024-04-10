function findUniqueNumber(arr) {
    const uniqueSet = new Set();
    for (const num of arr) {
      if (uniqueSet.has(num)) {
        uniqueSet.delete(num);
      } else {
        uniqueSet.add(num);
      }
    }
    return Array.from(uniqueSet)[0];
  }
  const inputArray = prompt("Enter array: ");
  const arr = inputArray.split(" ").map(Number);
  const uniqueNumber = findUniqueNumber(arr);
  console.log("Only unique number is: " + uniqueNumber);
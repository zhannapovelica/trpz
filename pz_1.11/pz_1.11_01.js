function arrayFromNto1(n) {
    if (n <= 0) {
      return [];
    }
    const result = [];
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
    return result;
  }
  const inputOfUser = prompt("Enter number: ");
  const n = parseInt(inputOfUser);
  const newArr = arrayFromNto1(n);
  console.log(newArr);
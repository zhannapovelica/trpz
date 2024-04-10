function analyzeNumber(number) {
    if (number > 0) {
        console.log("Number is positive.");
    } else if (number < 0) {
        console.log("Number is negative.");
    } else {
        console.log("Number is 0.");
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Number is simple.");
    } else {
        console.log("Number is not simple.");
    }
    const divisors = [2, 5, 3, 6, 9];
    let allDivisible = true;
    for (const divisor of divisors) {
        if (number % divisor !== 0) {
            allDivisible = false;
            break;
        }
    }
    if (allDivisible) {
        console.log("Number is divide on 2, 5, 3, 6, 9 without residue.");
    } else {
        console.log("Number is not divide on 2, 5, 3, 6, 9 without residue.");
    }
}
const inputNumber = 27;
analyzeNumber(inputNumber);
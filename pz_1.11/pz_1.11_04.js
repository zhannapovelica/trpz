function Add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числового типу';
    }
    return a + b;
}
function Sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числового типу';
    }
    return a - b;
}
function Mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числового типу';
    }
    return a * b;
}
function Div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числового типу';
    }
    if (b === 0) {
        return 'Помилка: ділення на нуль недопустиме';
    }
    return a / b;
}
function Calc(a, b, operation) {
    switch (operation) {
        case 'Add':
            return Add(a, b);
        case 'Sub':
            return Sub(a, b);
        case 'Mul':
            return Mul(a, b);
        case 'Div':
            return Div(a, b);
        default:
            return 'Помилка: невідома арифметична операція';
    }
}
const result = Calc(10, 5, 'Add'); // Результат: 15
console.log('Результат обчислення:', result);
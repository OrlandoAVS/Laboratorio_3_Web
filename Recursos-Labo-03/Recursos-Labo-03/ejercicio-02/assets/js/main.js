const plus = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const split = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const requestNumber = (message) => {
    let input = prompt(message);
    let number = parseFloat(input);
    while (isNaN(number)) {
        input = prompt(`Entrada inválida. ${message}`);
        number = parseFloat(input);
    }
    return number;
};

const selectOperation = () => {
    const operation = parseInt(prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
    switch (operation) {
        case 1:
            return plus;
        case 2:
            return subtract;
        case 3:
            return multiply;
        case 4:
            return split;
        default:
            alert("Opción inválida.");
            return selectOperation();
    }
};

const main = () => {
    const num1 = requestNumber("Inserta un número:");
    const num2 = requestNumber("Inseta otro número:");
    const operation = selectOperation();
    const result = operation(num1, num2);
    alert(`El resultado es: ${result}`);
};

main();

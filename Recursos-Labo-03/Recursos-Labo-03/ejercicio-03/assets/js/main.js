const calculateFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

const requestNumber = () => {
    const number = prompt("Introduce un número entero no negativo para calcular su factorial:");
    
    if (number === null) {
        return;
    }

    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber) || parsedNumber < 0) {
        alert("Por favor, introduce un número entero no negativo.");
    } else {
        const result = calculateFactorial(parsedNumber);
        alert(`El factorial de ${parsedNumber} (iterativo) es: ${result}`);
    }
}

const main = () => {
    requestNumber();
}

main();

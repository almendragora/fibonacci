//fibonacci

function fibonacci(numero){
    const arrFib = [0,1];
    for(let i = 2; i <= numero; i++){
        arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
    }
    return arrFib;
}

// Solicitar al usuario que ingrese el valor de 'n'
const n = parseInt(prompt("Ingrese la cantidad de números de la secuencia de Fibonacci que desea generar:"));

// Verificar si 'n' es un número válido
if (!isNaN(n) && n >= 0) {
    const fibNumbers = fibonacci(n);
    console.log("Secuencia de Fibonacci:", fibNumbers);
} else {
    console.error("Ingrese un número válido.");
}

// inyectar en html
function calcularFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const fibNumbers = fibonacci(numero);
    const fibonacciSequenceDiv = document.getElementById("fibonacciSequence");
    fibonacciSequenceDiv.innerHTML = "Secuencia de Fibonacci: " + fibNumbers.join(", ");
}
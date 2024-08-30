// Lista de números primos inicial
const primes = [2];
let currentIndex = 0;

// Función para verificar si un número es primo
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// Función para encontrar el siguiente número primo
function findNextPrime(num) {
    let next = num + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

// Función para encontrar el primo anterior
function findPreviousPrime(num) {
    let previous = num - 1;
    while (previous > 1 && !isPrime(previous)) {
        previous--;
    }
    return previous;
}

// Evento para manejar el clic derecho (avanzar al siguiente primo)
document.getElementById('prime-display').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if (currentIndex === primes.length - 1) {
        primes.push(findNextPrime(primes[primes.length - 1]));
    }
    currentIndex++;
    updateDisplay();
});

// Evento para manejar el clic izquierdo (retroceder al primo anterior)
document.getElementById('prime-display').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
});

// Evento para avanzar 10 números primos con la barra espaciadora
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (currentIndex + 10 < primes.length) {
            currentIndex += 10;
        } else {
            for (let i = 0; i < 10; i++) {
                primes.push(findNextPrime(primes[primes.length - 1]));
            }
            currentIndex += 10;
        }
        updateDisplay();
    }
});

// Actualiza el contenido mostrado y el contador de posición
function updateDisplay() {
    const primeDisplay = document.getElementById('prime-display');
    const primeCounter = document.getElementById('prime-counter');

    if (currentIndex >= 0 && currentIndex < primes.length) {
        const prime = primes[currentIndex];
        const position = currentIndex + 1;
        primeDisplay.textContent = prime;
        primeCounter.textContent = `Primo ${position}`;
    } else {
        primeDisplay.textContent = "No hay más números primos.";
        primeCounter.textContent = "";
    }
}

// Inicialización
updateDisplay();

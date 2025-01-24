/**
 * Return the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 */
function getFibonacciNumber(n: number): number {
    if (n < 0) throw new Error("Input must be a non-negative integer.");
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Example usage
const position: number = 10;
const fibonacciNumber: number = getFibonacciNumber(position);
console.log(`O ${position}º número da sequência de Fibonacci é: ${fibonacciNumber}`);

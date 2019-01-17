// To enter watch mode, enter:
// tsc functions.ts --watch
// Factorial Function
var factorial = function (x) {
    if (x <= 1)
        return 1;
    else
        return x * factorial(x - 1);
};
// Output factorial function calls to console
for (var i = 0; i <= 6; i++) {
    console.log("Factorial of " + i + ": " + factorial(i));
}
console.log("");
// Fibonacci Function
var fibonacci = function (x) {
    if (x == 0)
        return 0;
    else if (x == 1)
        return 1;
    else
        return (fibonacci(x - 2) + fibonacci(x - 1));
};
// Output fibonacci function calls to console
for (var i = 0; i <= 10; i++) {
    console.log("Fibonacci of " + i + ": " + fibonacci(i));
}
console.log("");
// Greatest Common Divisor
var GCD = function (x, y) {
    if (y == 0)
        return x;
    else
        return GCD(y, x % y);
};
// Output GCD function calls to console
console.log("GCD of 6 and 9: " + GCD(6, 9));
console.log("GCD of 20 and 75: " + GCD(20, 75));
console.log("GCD of 34 and 153: " + GCD(17, 153));
console.log("");
// Combination without repetition (n choose r)
var combination = function (n, r) {
    if (r == 0 || r == n)
        return 1;
    else if (r > n)
        return 0;
    else
        return (combination(n - 1, r - 1) + combination(n - 1, r));
};
// Output combination function calls to console
console.log("Combination function - 4 choose 2: " + combination(4, 2));
console.log("Combination function - 8 choose 5: " + combination(8, 5));
console.log("Combination function - 16 choose 3: " + combination(16, 3));
console.log("");
// Josephus Problem
var josephus = function (n, k) {
    if (n == 1)
        return 1;
    else
        return ((josephus(n - 1, k) + k - 1) % n) + 1;
};
console.log("Josephus problem - 7 people skip size 3: " + josephus(7, 3));
console.log("Josephus problem - 41 people skip size 3: " + josephus(41, 3));
console.log("Josephus problem - 40 people skip size 7: " + josephus(40, 7));

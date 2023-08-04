// Return the next higher prime number
// This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

const findNextPrime = (a) => {
    const isPrime = (n) => {
        if (n <= 1) return false;

        for(let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let nextNumber = a + 1;

    while (true) {
        if(isPrime(nextNumber)) {
            return nextNumber;
        }
        nextNumber++;
    }
}
 
console.log(findNextPrime(4)); // Expected output: 5
console.log(findNextPrime(10)); // Expected output: 11
console.log(findNextPrime(20)); // Expected output: 23
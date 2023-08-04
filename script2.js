// Find next higher natural number that is divisble by y
// Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y

const divisibleByY = (x, y) => {

    const xDividesY = (n,y) => {
        if (n % y === 0) {
            return true;
        }
        return false;
    }

    if (xDividesY(x,y)) {
        return x;
    }
   

    let nextNumber = x + 1; 
    while (true) {
        if (xDividesY(nextNumber, y)) {
            return nextNumber;
        }
        nextNumber++;
    }
}

console.log(divisibleByY(4,2));
console.log(divisibleByY(5,2));
console.log(divisibleByY(7,2));
console.log(divisibleByY(8,2));
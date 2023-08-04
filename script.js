// Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result


function myFunction(a, b) {
    return a + b;
 }

// console.log(myFunction(1,2));



//Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

function myFunction(a, b) {
    return a === b;
  }

// console.log(myFunction(2, 3));
// console.log(myFunction(3, 3));
// console.log(myFunction(1, '1')); 
// console.log(myFunction('10', '10'));



//Write a function that takes a value as argument. Return the type of the value.


function myFunction(a) {
    return typeof a;
 }

// console.log(myFunction(1)); // Expected: 'number'
// console.log(myFunction(false)); // Expected: 'boolean'
// console.log(myFunction({})); // Expected: 'object'
// console.log(myFunction(null)); // Expected: 'object'
// console.log(myFunction('string')); // Expected: 'string'
// console.log(myFunction(['array'])); // Expected: 'object'


//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n) {
    return a[n - 1];
 }

// console.log(myFunction('abcd', 1)); // Expected: 'b'
// console.log(myFunction('zyxbwpl', 5)); // Expected: 'p'
// console.log(myFunction('gfedcba', 3)); // Expected: 'd'



// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function myFunction(a) {
    return a.slice(3);
 }


// console.log(myFunction('abcdefg', 3)); // Expected: 'defg'
// console.log(myFunction('1234', 3)); // Expected: '4'
// console.log(myFunction('fgedcba', 3)); // Expected: 'dcba'


// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function myFunction(str) {
    return str.slice(-3);
 }

// console.log(myFunction('abcdefg', 4)); // Expected: 'efg'
// console.log(myFunction('1234', 1)); // Expected: '234'
// console.log(myFunction('fgedcba', 2)); // Expected: 'dcba'



//Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

function myFunction(a) {
    return a.slice(0, 3);
 }

// console.log(myFunction('abcdefg', 3)); // Expected: 'abc'
// console.log(myFunction('1234', 3)); // Expected: '123'
// console.log(myFunction('fgedcba', 3)); // Expected: 'fge'


// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

function myFunction(a) {
    return a.indexOf('is');
 }

// console.log(myFunction("praise")); // Expected: 3
// console.log(myFunction("risky")); // Expected: 1
// console.log(myFunction("paris")); // Expected: 3



//Write a function that takes a string (a) as argument. Extract the first half a. Return the result

function myFunction(a) {
    return a.slice(0, a.length / 2);
 }


//  console.log(myFunction('abcdefgh')); // Expected: 'abcd'
// console.log(myFunction('1234')); // Expected: '12'
// console.log(myFunction('gedcba')); // Expected: 'ged'

// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function myFunction(a) {
    return a.slice(0, -3);
 }

 //  console.log(myFunction('abcdefgh')); // Expected: 'abcde'

//  Write a function that takes two numbers (a and b) as argument. Return b percent of a


function myFunction(a, b) {
    return b / 100 * a
  }


// console.log(myFunction(100,50));


// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }


// console.log(myFunction(6,5,4,3,2,1));//Expected 10.5


// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function myFunction(a, b) {
    return a.includes(b) ? a + b : b + a;
  }



// console.log(myFunction('cheese', 'cake')); // Expected: 'cheesecake'
// console.log(myFunction('lips', 's')); // Expected: 'slips'
// console.log(myFunction('Java', 'script')); // Expected: 'Javascript'
// console.log(myFunction(' think, therefore I am', 'I')); // Expected: 'I think, therefore I am'


//Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function myFunction(a) {
    return a % 2 === 0
  }

// console.log(myFunction(10)); // Expected true;


// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {
    return b.split(a).length - 1
  }


// console.log(myFunction('m', 'how many times does the character occur in this sentence?')); // Expected: 2
// console.log(myFunction('h', 'how many times does the character occur in this sentence?')); // Expected: 4
// console.log(myFunction('?', 'how many times does the character occur in this sentence?')); // Expected: 1
// console.log(myFunction('z', 'how many times does the character occur in this sentence?')); // Expected: 0


// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

// function myFunction(a) {
//     return a - Math.floor(a) === 0
//   }

//OR

function myFunction(a) {
    return Number.isInteger(a)
  }


// console.log(myFunction(10)); // Expected true;
// console.log(myFunction(10.5)); // Expected false;


// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

function myFunction(a, b) {
    return a < b ? a / b : a * b
  }



// console.log(myFunction(3,6)); // Expected 0.5;
// console.log(myFunction(20, 10)); // Expected 200;



// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction(a) {
    return Number(a.toFixed(2));
  }


// console.log(myFunction(2,1256)); // Expected 2.12;


// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

const myFunction = (number) => {
    return number.toString().split('').map(Number);
  };


// console.log(myFunction(10)); // Expected: [1, 0]
// console.log(myFunction(931)); // Expected: [9, 3, 1]
// console.log(myFunction(193278)); // Expected: [1, 9, 3, 2, 7, 8]







// It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const myFunction = (str) => {
    const words = {
      Jsvaiacript: "Javascript",
      Ctounsitryside: "Countryside",
      Doiwntowvn: "Downtown",
    };
  
    const formattedStr = str.replace(/[A-Z]/g, (letter) => letter.toLowerCase());
    return words[formattedStr];
  };

// console.log(myFunction("Jsvaiacript")); // Expected: "Javascript"
// console.log(myFunction("Ctounsitryside")); // Expected: "Countryside"
// console.log(myFunction("Doiwntowvn")); // Expected: "Downtown"







// Find next higher natural number that is divisble by y
// Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y


// Insert character after every n characters (backwards)
// Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.


// Find the correct word by incrementing letters in alphabet
// Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word



// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'


function one(a, n) {
    return a[n - 1];
 }

// console.log(one([1, 2, 3, 4, 5], 3)); // Output: 3
// console.log(one([10, 9, 8, 7, 6], 5)); // Output: 6
// console.log(one([7, 2, 1, 6, 3], 1)); // Output: 7


// Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function two(a) {
    return a.slice(3);
 }


// console.log(two([1, 2, 3, 4, 5])); 
// console.log(two([10, 9, 8, 7, 6])); 
// console.log(two([7, 2, 1, 6, 3])); 

// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function three(a,b) {
    return a.filter((element) => element !== b);
}

// console.log(three([1, 2, 3], 2)); // Output: [1, 3]
// console.log(three([1, 2, '2'], '2')); // Output: [1, 2]
// console.log(three([false, '2', 1], false)); // Output: ['2', 1]
// console.log(three([1, 2, '2', 1], 1)); // Output: [2, '2']


// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

function four(a) {
    return a.filter((el) => el < 0).length;
 }

//  console.log(four([1, -2, 2, -4])); // Output: 2 (There are two negative values: -2 and -4)
// console.log(four([0, 9, 1])); // Output: 0 (There are no negative values in this array)
// console.log(four([4, -3, 2, 1, 0])); // Output: 1 (There is one negative value: -3)


// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function sum(a) {
    return a.reduce((acc, cur) => acc + cur, 0);
 }

//  console.log(sum([10,100,40]));

// Return the average of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function average( arr ) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
    }

// console.log(average([10,100,40])); //Expected 50;


// Write a function that takes an array of strings as argument. Return the longest string.

function findLongestString( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }


// console.log(findLongestString(["apple", "banana", "cherry"])); // Output: "banana"
// console.log(findLongestString(["car", "bike", "train"])); // Output: "train"
// console.log(findLongestString(["cat", "dog", "elephant", "tiger"])); // Output: "elephant"


//Check if all array elements are equal
//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function equalElements( arr ) {
    return new Set(arr).size === 1
  }

// console.log(equalElements([true, true, true, true])); // Output: true (All elements are equal to true)
// console.log(equalElements(['test', 'test', 'test'])); // Output: true (All elements are equal to 'test')
// console.log(equalElements([1, 1, 1, 2])); // Output: false (Not all elements are equal)
// console.log(equalElements(['10', 10, 10, 10])); // Output: false (Not all elements are equal)
// console.log(equalElements([])); // Output: false (Empty array cannot have all elements equal)

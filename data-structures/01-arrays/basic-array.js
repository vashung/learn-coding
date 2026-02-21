// Basic Array Operations
// Learn fundamental array operations and syntax

/**
 * Creating Arrays
 */

// Method 1: Array literal
const numbers = [1, 2, 3, 4, 5];

// Method 2: Array constructor
const arr = new Array(1, 2, 3);

// Method 3: Empty array
const empty = [];

// Method 4: Typed array
const typedArray = new Int32Array([1, 2, 3]);

/**
 * Accessing Elements
 */

console.log('--- Accessing Elements ---');
console.log(numbers[0]);        // 1 (first element)
console.log(numbers[4]);        // 5 (last element)
console.log(numbers.length);    // 5

/**
 * Modifying Elements
 */

console.log('--- Modifying Elements ---');
numbers[0] = 10;
console.log(numbers); // [10, 2, 3, 4, 5]

/**
 * Adding Elements
 */

console.log('--- Adding Elements ---');
const arr1 = [1, 2, 3];

// Add to end
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

// Add to beginning
arr1.unshift(0);
console.log(arr1); // [0, 1, 2, 3, 4]

/**
 * Removing Elements
 */

console.log('--- Removing Elements ---');
const arr2 = [1, 2, 3, 4, 5];

// Remove from end
arr2.pop();
console.log(arr2); // [1, 2, 3, 4]

// Remove from beginning
arr2.shift();
console.log(arr2); // [2, 3, 4]

// Remove at specific index
arr2.splice(1, 1); // Remove 1 element at index 1
console.log(arr2); // [2, 4]

/**
 * Iteration
 */

console.log('--- Iteration ---');
const items = ['apple', 'banana', 'cherry'];

// For loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// forEach
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// for...of
for (const item of items) {
  console.log(item);
}

/**
 * Searching
 */

console.log('--- Searching ---');
const fruits = ['apple', 'banana', 'cherry', 'date'];

// indexOf
console.log(fruits.indexOf('banana'));     // 1
console.log(fruits.indexOf('grape'));      // -1 (not found)

// includes
console.log(fruits.includes('cherry'));    // true
console.log(fruits.includes('grape'));     // false

// find
const nums = [10, 20, 30, 40];
const found = nums.find(num => num > 25);
console.log(found); // 30

// findIndex
const foundIndex = nums.findIndex(num => num > 25);
console.log(foundIndex); // 2

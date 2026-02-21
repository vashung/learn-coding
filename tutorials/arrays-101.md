# Arrays 101 - Complete Tutorial

## What is an Array?

An array is a data structure that stores multiple values of the same type in a single variable. Think of it as a container with numbered slots.

```
Array: [10, 20, 30, 40, 50]
Index:  0   1   2   3   4
```

## Why Use Arrays?

- **Store multiple values** in one variable
- **Easy access** via indexing
- **Efficient operations** on collections of data
- **Foundation** for more complex data structures

## Creating an Array

### JavaScript

```javascript
// Method 1: Array literal (preferred)
const numbers = [1, 2, 3, 4, 5];

// Method 2: Array constructor
const arr = new Array(1, 2, 3);

// Method 3: Using Array.of()
const arr2 = Array.of(1, 2, 3);

// Mixed data types (not recommended)
const mixed = [1, 'hello', true, 3.14];
```

### Python

```python
# Method 1: List literal
numbers = [1, 2, 3, 4, 5]

# Method 2: Using range
numbers = list(range(1, 6))

# Method 3: List comprehension
numbers = [x * 2 for x in range(1, 6)]
```

## Basic Operations

### Reading Elements

```javascript
const arr = [10, 20, 30, 40, 50];

// Access by index
console.log(arr[0]);      // 10
console.log(arr[2]);      // 30
console.log(arr[-1]);     // undefined (use arr[arr.length - 1] instead)
```

### Writing Elements

```javascript
const arr = [1, 2, 3];

// Modify existing element
arr[1] = 99;
console.log(arr); // [1, 99, 3]

// Add new element
arr[3] = 4;
console.log(arr); // [1, 99, 3, 4]
```

### Adding Elements

```javascript
const arr = [1, 2, 3];

// Add to end
arr.push(4);            // [1, 2, 3, 4]

// Add to beginning
arr.unshift(0);         // [0, 1, 2, 3, 4]

// Add in middle
arr.splice(2, 0, 1.5);  // [0, 1, 1.5, 2, 3, 4]
```

### Removing Elements

```javascript
const arr = [1, 2, 3, 4, 5];

// Remove from end
arr.pop();              // [1, 2, 3, 4]

// Remove from beginning
arr.shift();            // [2, 3, 4]

// Remove from middle
arr.splice(1, 1);       // [2, 4]
```

## Looping Through Arrays

```javascript
const items = ['a', 'b', 'c'];

// Traditional for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// forEach method
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// for...of loop
for (const item of items) {
  console.log(item);
}

// map - transform elements
const doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter - select elements
const evens = [1, 2, 3, 4, 5].filter(x => x % 2 === 0); // [2, 4]
```

## Common Patterns

### Searching for an Element

```javascript
const arr = [10, 20, 30, 40];

// Find first match
const found = arr.find(x => x > 25);  // 30

// Find index of element
const index = arr.indexOf(30);         // 2

// Check if element exists
const exists = arr.includes(20);       // true
```

### Transforming an Array

```javascript
const numbers = [1, 2, 3, 4];

// Double each number
const doubled = numbers.map(x => x * 2);  // [2, 4, 6, 8]

// Sum all numbers
const sum = numbers.reduce((a, b) => a + b, 0);  // 10

// Get only even numbers
const evens = numbers.filter(x => x % 2 === 0);  // [2, 4]
```

## Time Complexity

| Operation | Time | Notes |
|-----------|------|-------|
| Access | O(1) | Direct index access |
| Search | O(n) | Must check elements |
| Insert (end) | O(1) | Just add to end |
| Insert (middle) | O(n) | Must shift elements |
| Delete (end) | O(1) | Just remove end |
| Delete (middle) | O(n) | Must shift elements |

## Key Takeaways

✅ Arrays are indexed from 0
✅ Use `length` to get array size
✅ Arrays can grow dynamically
✅ Perfect for storing multiple items
✅ Fast access by index
✅ Modifying size can be slow in middle positions

## Next Steps

- Practice array operations
- Learn 2D arrays
- Explore array algorithms (sorting, searching)
- Study linked lists as alternative

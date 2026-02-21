# Arrays

## Overview

Arrays are one of the most fundamental data structures. They store multiple items of the same type in contiguous memory locations.

## Key Concepts

- **Index-based access**: Access elements by position (0-indexed)
- **Fixed/Dynamic size**: Traditional arrays have fixed size; dynamic arrays can grow
- **Time Complexity**: 
  - Access: O(1)
  - Search: O(n)
  - Insertion: O(n)
  - Deletion: O(n)

## Files in This Section

- `basic-array.js` - Basic array operations
- `array-methods.js` - Common array methods
- `array-algorithms.js` - Common algorithms

## Examples

```javascript
// Creating an array
const arr = [1, 2, 3, 4, 5];

// Accessing elements
console.log(arr[0]); // 1

// Adding elements
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Removing elements
arr.pop(); // [1, 2, 3, 4, 5]
```

## Practice Problems

- Reverse an array
- Find maximum element
- Two sum problem
- Remove duplicates

See `/practice-problems` for solution attempts.

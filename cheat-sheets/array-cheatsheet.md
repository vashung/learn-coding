# Array Cheat Sheet

## Creating Arrays

```javascript
const arr = [1, 2, 3];                    // Literal
const arr = new Array(1, 2, 3);           // Constructor
const arr = Array.from('abc');            // From iterable
const arr = Array.of(1, 2, 3);           // Array.of
```

## Accessing Elements

```javascript
arr[0]                  // First element
arr[arr.length - 1]     // Last element
arr.at(-1)              // Last element (modern)
arr.slice(0, 2)         // Get subset
```

## Modifying - Add

```javascript
arr.push(4)             // Add to end
arr.unshift(0)          // Add to start
arr.splice(1, 0, x)     // Insert at index 1
arr.concat([4, 5])      // Create new with additions
```

## Modifying - Remove

```javascript
arr.pop()               // Remove from end
arr.shift()             // Remove from start
arr.splice(1, 1)        // Remove 1 element at index 1
arr.slice(0, 2)         // Get without modifying
```

## Search & Find

```javascript
arr.indexOf(3)          // Find index (first match)
arr.lastIndexOf(3)      // Find index (last match)
arr.includes(3)         // Contains? (boolean)
arr.find(x => x > 2)    // Find first matching element
arr.findIndex(x => x > 2) // Find index of first match
```

## Transform

```javascript
arr.map(x => x * 2)     // Transform each element
arr.filter(x => x > 2)  // Keep elements matching condition
arr.reduce((a,b) => a+b, 0) // Reduce to single value
arr.sort()              // Sort in place
arr.reverse()           // Reverse in place
arr.flat()              // Flatten nested arrays
```

## Iterate

```javascript
for (const item of arr)            // for...of
arr.forEach((item, idx) => {})     // forEach
arr.map(x => x)                    // map (returns new array)
arr.some(x => x > 2)               // Any match?
arr.every(x => x > 0)              // All match?
```

## Other Useful Methods

```javascript
arr.join(', ')          // Join to string
arr.toString()          // Convert to string
arr.fill(0)             // Fill with value
arr.copyWithin(0, -2)   // Copy within array
arr.length              // Number of elements
arr.slice()             // Shallow copy
```

## Time Complexity

- **Access**: O(1)
- **Search**: O(n)
- **Insert**: O(n)
- **Delete**: O(n)
- **Sort**: O(n log n)

## Common Patterns

```javascript
// Sum all elements
arr.reduce((sum, x) => sum + x, 0)

// Get unique values
[...new Set(arr)]

// Flatten one level
arr.flat()

// Group by property
arr.reduce((acc, obj) => ({...acc, [obj.key]: obj}), {})

// Shuffle
arr.sort(() => Math.random() - 0.5)
```

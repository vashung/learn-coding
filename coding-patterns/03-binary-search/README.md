# Binary Search Pattern

## Overview

Binary search divides the search space in half repeatedly to find a target in sorted data. Extremely efficient with O(log n) time complexity.

## When to Use

- ✅ Search in sorted arrays
- ✅ Find first/last occurrence
- ✅ Rotated array search
- ✅ Find peak element
- ✅ Search insert position

## Key Concepts

### Basic Binary Search
```javascript
let left = 0, right = arr.length - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}

return -1; // Not found
```

### Search Space Techniques

1. **Inclusive**: `left <= right`
2. **Exclusive**: `left < right`
3. **Avoid overflow**: `mid = left + Math.floor((right - left) / 2)`

## Time & Space Complexity

| Aspect | Complexity |
|--------|-----------|
| Time | O(log n) |
| Space | O(1) |

## Classic Problems

1. **Binary Search**
2. **Find First Bad Version**
3. **Rotated Sorted Array Search**
4. **Search Insert Position**
5. **Peak Element in Array**

---

**Next**: Master binary search variations

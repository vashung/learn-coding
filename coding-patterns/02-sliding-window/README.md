# Sliding Window Pattern

## Overview

The sliding window technique maintains a window of elements and slides it across the data structure. This pattern is optimal for finding subarrays or substrings meeting specific criteria.

## When to Use

- ✅ Find longest/shortest substring
- ✅ Maximum sum subarray of fixed size
- ✅ String containing permutation
- ✅ Longest substring without repeating chars
- ✅ Anagram problems

## Key Concepts

### Fixed Size Window
```javascript
let windowSize = k;
let windowSum = 0;

// Build initial window
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}

// Slide the window
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
}
```

### Variable Size Window
```javascript
let left = 0;
let maxLen = 0;
const charSet = new Set();

for (let right = 0; right < s.length; right++) {
  while (charSet.has(s[right])) {
    charSet.delete(s[left]);
    left++;
  }
  charSet.add(s[right]);
  maxLen = Math.max(maxLen, right - left + 1);
}
```

## Time & Space Complexity

| Aspect | Complexity |
|--------|-----------|
| Time | O(n) - each element visited twice max |
| Space | O(k) - window size or character set |

## Classic Problems

1. **Maximum Sum Subarray of Size K**
2. **Longest Substring Without Repeating Characters**
3. **Permutation in String**
4. **Longest Repeating Character Replacement**
5. **Minimum Size Subarray Sum**

## Common Patterns

### Pattern 1: Fixed Window
```javascript
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

### Pattern 2: Variable Window
```javascript
function longestSubstringWithoutRepeating(s) {
  const charMap = new Map();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right])) {
      left = Math.max(left, charMap.get(s[right]) + 1);
    }
    charMap.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

## Tips & Tricks

1. **Use HashMap/Set** to track window contents
2. **Two pointers** for window boundaries
3. **Expand** right pointer to add elements
4. **Contract** left pointer to shrink window
5. **Track state** during window changes

---

**Next**: Learn and practice sliding window problems

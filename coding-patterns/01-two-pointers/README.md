# Two Pointers Pattern

## 🌐 Choose Your Language

**Select language below to view code examples:**

<details open>
<summary><strong>JavaScript</strong> 🔤</summary>

### JavaScript Implementation. 

```javascript
// Problem 1: Two Sum II
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [nums[left], nums[right]];
    if (sum < target) left++;
    else right--;
  }
  return null;
} 

// Problem 2: Valid Palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Problem 3: Remove Duplicates
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```

**[View Full JavaScript Examples →](./examples.js)**

</details>

<details>
<summary><strong>Python</strong> 🐍</summary>

### Python Implementation

```python
# Problem 1: Two Sum II
def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [nums[left], nums[right]]
        if current_sum < target:
            left += 1
        else:
            right -= 1
    return None

# Problem 2: Valid Palindrome
def is_palindrome(s):
    cleaned = ''.join(char.lower() for char in s if char.isalnum())
    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True

# Problem 3: Remove Duplicates
def remove_duplicates(nums):
    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    return i + 1
```

**[View Full Python Examples →](./examples.py)**

</details>

<details>
<summary><strong>Java</strong> ☕</summary>

### Java Implementation

```java
// Problem 1: Two Sum II
public static int[] twoSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return new int[]{nums[left], nums[right]};
        if (sum < target) left++;
        else right--;
    }
    return null;
}

// Problem 2: Valid Palindrome
public static boolean isPalindrome(String s) {
    String cleaned = s.toLowerCase().replaceAll("[^a-z0-9]", "");
    int left = 0, right = cleaned.length() - 1;
    while (left < right) {
        if (cleaned.charAt(left) != cleaned.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}

// Problem 3: Remove Duplicates
public static int removeDuplicates(int[] nums) {
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

**[View Full Java Examples →](./examples.java)**

</details>

---

## Overview

The two-pointer technique uses two pointers to traverse an array or string, typically moving toward each other or in the same direction. This pattern is highly efficient for finding pairs or comparing elements.

## When to Use

- ✅ Sorted arrays with pair/triplet finding
- ✅ Container with most water
- ✅ Remove duplicates from sorted array
- ✅ Palindrome validation
- ✅ Merge sorted arrays

## Key Concepts

### Two Pointers Approaching Each Other
```javascript
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // Solve based on arr[left] and arr[right]
  // Move pointers based on condition
}
```

### Same Direction (Fast & Slow)
```javascript
let slow = 0;
let fast = 0;

while (fast < arr.length) {
  // Process or move based on condition
  if (condition) {
    slow++;
  }
  fast++;
}
```

## Time & Space Complexity

| Operation | Complexity |
|-----------|-----------|
| Time | O(n) or O(n log n) if sorting needed |
| Space | O(1) typically, O(n) if output array |

## Classic Problems

1. **Two Sum II (Sorted Array)**
   - Find two numbers that sum to target
   - Input: [2, 7, 11, 15], target = 9
   - Output: [2, 7] or indices [1, 2]

2. **Container With Most Water**
   - Find two lines that hold most water
   - Move pointers inward to maximize area

3. **Palindrome Validation**
   - Check if string is palindrome
   - Compare chars from start and end

4. **Remove Duplicates**
   - Remove duplicate elements from sorted array
   - Modify array in-place

5. **Merge Sorted Arrays**
   - Merge two sorted arrays
   - Fill from end to avoid overwriting

## Common Patterns

### Pattern 1: Find Pair with Target Sum
```javascript
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    if (sum < target) left++;
    else right--;
  }
  
  return null;
}
```

### Pattern 2: Palindrome Check
```javascript
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  
  return true;
}
```

### Pattern 3: Remove Duplicates
```javascript
function removeDuplicates(arr) {
  let i = 0;
  
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  
  return i + 1;
}
```

## Practice Problems

### Easy 🟢
- [ ] Valid Palindrome
- [ ] Two Sum II - Input array is sorted
- [ ] Remove Duplicates from Sorted Array

### Medium 🟡
- [ ] Container With Most Water
- [ ] 3Sum
- [ ] Trapping Rain Water

### Hard 🔴
- [ ] 4Sum
- [ ] Trapping Rain Water II

## Tips & Tricks

1. **Array must be sorted** (or can be sorted)
2. **Start from opposite ends** for most problems
3. **Move based on comparison**, not blindly
4. **Preserve relative order** when needed
5. **In-place modifications** save space

## Related Patterns

- Sliding Window
- Binary Search
- Hash Map (for unsorted arrays)

---

**Next**: Practice easy problems, then move to medium difficulty

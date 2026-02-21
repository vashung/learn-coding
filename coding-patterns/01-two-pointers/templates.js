// Two Pointers Pattern - Template Code
// Use this template for solving two-pointer problems

/**
 * Template 1: Approach Each Other
 * Use when array is sorted and finding pairs
 */

function twoPointerTemplate1(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      // Found solution
      return [left, right];
    } else if (sum < target) {
      left++; // Need larger value
    } else {
      right--; // Need smaller value
    }
  }

  return null; // No solution
}

/**
 * Template 2: Same Direction (Slow & Fast)
 * Use when removing/modifying elements in place
 */

function twoPointerTemplate2(arr) {
  let slow = 0; // Position to write
  let fast = 0; // Position to read

  while (fast < arr.length) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
    fast++;
  }

  return slow + 1; // New length
}

/**
 * Template 3: Palindrome Check
 * Use when validating palindromes
 */

function isPalindromeTemplate(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters if needed
    while (left < right && !isAlphaNumeric(str[left])) left++;
    while (left < right && !isAlphaNumeric(str[right])) right++;

    // Compare characters
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}

/**
 * Template 4: Merge Sorted Arrays
 * Use when merging two sorted sequences
 */

function mergeSortedTemplate(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;

  // Merge while both have elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  // Add remaining from arr1
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  // Add remaining from arr2
  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}

/**
 * Template 5: Container Problem
 * Use when maximizing area/distance with constraints
 */

function containerTemplate(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxValue = 0;

  while (left < right) {
    // Calculate current value
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    maxValue = Math.max(maxValue, area);

    // Move pointer pointing to smaller value
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxValue;
}

// ============================================
// Usage Examples
// ============================================

console.log('=== Template Usage Examples ===\n');

// Template 1: Two Sum
console.log('Template 1 - Two Sum:');
console.log(twoPointerTemplate1([2, 7, 11, 15], 9)); // [0, 1]

// Template 2: Remove Duplicates
console.log('\nTemplate 2 - Remove Duplicates:');
const arr = [1, 1, 2, 2, 3];
const len = twoPointerTemplate2(arr);
console.log(`New length: ${len}, Array: [${arr.slice(0, len).join(', ')}]`);

// Template 3: Palindrome
console.log('\nTemplate 3 - Palindrome Check:');
console.log(isPalindromeTemplate('racecar')); // true
console.log(isPalindromeTemplate('A man, a plan, a canal: Panama')); // true

// Template 4: Merge
console.log('\nTemplate 4 - Merge Sorted:');
console.log(mergeSortedTemplate([1, 3], [2, 4])); // [1, 2, 3, 4]

// Template 5: Container
console.log('\nTemplate 5 - Container With Most Water:');
console.log(containerTemplate([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

console.log('\n✅ Template examples ready to use!');

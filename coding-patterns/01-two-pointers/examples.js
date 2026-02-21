// Two Pointers Pattern - Examples
// Practical implementations of two-pointer technique

/**
 * Problem 1: Two Sum II (Sorted Array)
 * Find two numbers that add up to target
 * 
 * INPUT: nums = [2, 7, 11, 15], target = 9
 * OUTPUT: [2, 7] or [7, 2] or indices [1, 2]
 */

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    }

    if (sum < target) {
      left++; // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return null; // No solution found
}

// Test
console.log('--- Two Sum II ---');
console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]
console.log(twoSum([2, 3, 4], 6)); // [2, 4]

/**
 * Problem 2: Valid Palindrome
 * Check if string is palindrome (ignoring spaces & case)
 * 
 * INPUT: "race car"
 * OUTPUT: true
 */

function isPalindrome(str) {
  // Clean string - remove spaces, convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test
console.log('--- Valid Palindrome ---');
console.log(isPalindrome('race car')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true

/**
 * Problem 3: Remove Duplicates from Sorted Array
 * Remove duplicates in-place, return new length
 * 
 * INPUT: [1, 1, 1, 2, 2, 3]
 * OUTPUT: 3 (modify array to [1, 2, 3, ...])
 */

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0; // Pointer for unique element position

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; // Return count of unique elements
}

// Test
console.log('--- Remove Duplicates ---');
const arr1 = [1, 1, 1, 2, 2, 3];
const len1 = removeDuplicates(arr1);
console.log(`Length: ${len1}, Array: [${arr1.slice(0, len1).join(', ')}]`); // 3, [1, 2, 3]

/**
 * Problem 4: Container With Most Water
 * Find two lines that hold the most water
 * 
 * INPUT: [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * OUTPUT: 49 (between height 8 and 7, width 7)
 */

function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate current water area
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    maxWater = Math.max(maxWater, area);

    // Move pointer pointing to shorter line
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Test
console.log('--- Container With Most Water ---');
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

/**
 * Problem 5: Merge Sorted Arrays
 * Merge two sorted arrays into one
 * 
 * INPUT: nums1 = [1, 2, 4], nums2 = [1, 3, 4]
 * OUTPUT: [1, 1, 2, 3, 4, 4]
 */

function mergeSortedArrays(nums1, nums2) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare and add smaller element
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }

  return result;
}

// Test
console.log('--- Merge Sorted Arrays ---');
console.log(mergeSortedArrays([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4]
console.log(mergeSortedArrays([1, 5, 9], [2, 3, 8])); // [1, 2, 3, 5, 8, 9]

/**
 * Problem 6: Reverse String (In-place)
 * Reverse string using two pointers
 * 
 * INPUT: "hello"
 * OUTPUT: "olleh"
 */

function reverseString(str) {
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}

// Test
console.log('--- Reverse String ---');
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('JavaScript')); // "tpircSavaJ"

/**
 * Problem 7: 3Sum (Zero Sum Triplets)
 * Find all unique triplets that sum to zero
 * 
 * INPUT: [-1, 0, 1, 2, -1, -4]
 * OUTPUT: [[-1, -1, 2], [-1, 0, 1]]
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b); // Sort first
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Use two pointers for remaining array
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test
console.log('--- 3Sum (Zero Sum Triplets) ---');
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]

console.log('\n✅ All two-pointer examples completed!');

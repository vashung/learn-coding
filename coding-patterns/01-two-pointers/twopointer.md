## Two Pointer Pattern
The Two Pointer pattern is a powerful technique used to solve problems involving arrays or linked lists. It involves using two pointers to traverse the data structure, often from opposite ends, to find pairs, triplets, or other combinations that meet certain criteria.

### Key Benefits
- ✅ Efficiently find pairs/triplets in sorted arrays
- ✅ Solve problems with O(n) time complexity
- ✅ Reduce space complexity to O(1) in many cases


### Types of Two Pointers
1. **Opposite Direction**: One pointer starts at the beginning and the other at the end of the array. They move towards each other based on certain conditions.
2. **Same Direction**: Both pointers start at the same position and move in the same direction, often used for problems like removing duplicates or partitioning arrays.

3. **Fast and Slow Pointers**: One pointer moves faster than the other, commonly used in linked list problems to detect cycles or find the middle element.

4. **K Pointers**: More than two pointers can be used for problems like finding triplets or quadruplets that sum to a target value.

### Example: Removing Duplicates from Sorted Array
```java 
// java
if (nums.length == 0) return 0;
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



## Common Use Cases
#### 1. **Finding pairs in sorted arrays**: 
Use two pointers to find pairs that sum up to a target value.  
```python
# python
# two pair sum
def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []
```

```java
// java
// two pair sum
public int[] twoSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int currentSum = nums[left] + nums[right];
        if (currentSum == target) {
            return new int[]{left, right};
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return new int[]{-1, -1}; // No pair found
}
```



#### 2. **Container with most water**  
Use two pointers to calculate the maximum area of water that can be contained.

##### Python
```python
# Container with most water
def max_area(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        current_area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, current_area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area
```

##### Java
```java
// Container with most water
public int maxArea(int[] height) {
    int left = 0, right = height.length - 1;
    int maxArea = 0;
    while (left < right) {
        int currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
```



#### 3. **Palindrome validation**: 
Use two pointers to compare characters from the start and end of a string.

##### Python
```python
# Palindrome validation
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
```

##### Java
```java
// Palindrome validation
public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```


#### 4. **Merging sorted arrays**: 
Use two pointers to merge two sorted arrays in place.

```python
def merge(nums1, m, nums2, n):
    i, j, result = 0, 0, [] 
    # Traverse both arrays
    while i < m and j < n:
        if nums1[i] <= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    # Add remaining elements    while i < m:
        result.append(nums1[i])
        i += 1
    while j < n:
        result.append(nums2[j])
        j += 1
    return result
``` 

#### Java
```java
// merging sorted arrays
public int[] merge(int[] nums1, int m, int[] nums2, int n) {
    int i = 0, j = 0, k = 0;
    int[] result = new int[m + n];
    while (i < m && j < n) {    
        if (nums1[i] <= nums2[j]) {
            result[k++] = nums1[i++];
        } else {
            result[k++] = nums2[j++];
        }
    }
    while (i < m) {
        result[k++] = nums1[i++];
    }
    while (j < n) {
        result[k++] = nums2[j++];
    }
    return result;
}
```






#### 5. **Removing duplicates**: 
Use two pointers to remove duplicates from a sorted array in place.



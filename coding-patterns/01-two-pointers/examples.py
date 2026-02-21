# Two Pointers Pattern - Python Examples
# Practical implementations of two-pointer technique

"""
Problem 1: Two Sum II (Sorted Array)
Find two numbers that add up to target

INPUT: nums = [2, 7, 11, 15], target = 9
OUTPUT: [2, 7] or [7, 2] or indices [1, 2]
"""

def two_sum(nums, target):
    left = 0
    right = len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        
        if current_sum == target:
            return [nums[left], nums[right]]
        
        if current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1  # Need smaller sum
    
    return None  # No solution found

# Test
print("--- Two Sum II ---")
print(two_sum([2, 7, 11, 15], 9))  # [2, 7]
print(two_sum([2, 3, 4], 6))       # [2, 4]


"""
Problem 2: Valid Palindrome
Check if string is palindrome (ignoring spaces & case)

INPUT: "race car"
OUTPUT: True
"""

def is_palindrome(s):
    # Clean string - remove non-alphanumeric, convert to lowercase
    cleaned = ''.join(char.lower() for char in s if char.isalnum())
    
    left = 0
    right = len(cleaned) - 1
    
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    
    return True

# Test
print("\n--- Valid Palindrome ---")
print(is_palindrome('race car'))              # True
print(is_palindrome('hello'))                 # False
print(is_palindrome('A man, a plan, a canal: Panama'))  # True


"""
Problem 3: Remove Duplicates from Sorted Array
Remove duplicates in-place, return new length

INPUT: [1, 1, 1, 2, 2, 3]
OUTPUT: 3 (modify array to [1, 2, 3, ...])
"""

def remove_duplicates(nums):
    if len(nums) == 0:
        return 0
    
    i = 0  # Pointer for unique element position
    
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    
    return i + 1  # Return count of unique elements

# Test
print("\n--- Remove Duplicates ---")
arr1 = [1, 1, 1, 2, 2, 3]
length = remove_duplicates(arr1)
print(f"Length: {length}, Array: {arr1[:length]}")  # 3, [1, 2, 3]


"""
Problem 4: Container With Most Water
Find two lines that hold the most water

INPUT: [1, 8, 6, 2, 5, 4, 8, 3, 7]
OUTPUT: 49 (between height 8 and 7, width 7)
"""

def max_area(heights):
    left = 0
    right = len(heights) - 1
    max_water = 0
    
    while left < right:
        # Calculate current water area
        width = right - left
        height = min(heights[left], heights[right])
        area = width * height
        
        max_water = max(max_water, area)
        
        # Move pointer pointing to shorter line
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Test
print("\n--- Container With Most Water ---")
print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49


"""
Problem 5: Merge Sorted Arrays
Merge two sorted arrays into one

INPUT: nums1 = [1, 2, 4], nums2 = [1, 3, 4]
OUTPUT: [1, 1, 2, 3, 4, 4]
"""

def merge_sorted_arrays(nums1, nums2):
    result = []
    i, j = 0, 0
    
    # Compare and add smaller element
    while i < len(nums1) and j < len(nums2):
        if nums1[i] <= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    
    # Add remaining elements
    result.extend(nums1[i:])
    result.extend(nums2[j:])
    
    return result

# Test
print("\n--- Merge Sorted Arrays ---")
print(merge_sorted_arrays([1, 2, 4], [1, 3, 4]))  # [1, 1, 2, 3, 4, 4]
print(merge_sorted_arrays([1, 5, 9], [2, 3, 8]))  # [1, 2, 3, 5, 8, 9]


"""
Problem 6: Reverse String (In-place)
Reverse string using two pointers

INPUT: "hello"
OUTPUT: "olleh"
"""

def reverse_string(s):
    arr = list(s)
    left = 0
    right = len(arr) - 1
    
    while left < right:
        # Swap elements
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return ''.join(arr)

# Test
print("\n--- Reverse String ---")
print(reverse_string('hello'))        # olleh
print(reverse_string('JavaScript'))   # tpircSavaJ


"""
Problem 7: 3Sum (Zero Sum Triplets)
Find all unique triplets that sum to zero

INPUT: [-1, 0, 1, 2, -1, -4]
OUTPUT: [[-1, -1, 2], [-1, 0, 1]]
"""

def three_sum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        # Skip duplicates
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        # Use two pointers for remaining array
        left = i + 1
        right = len(nums) - 1
        
        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]
            
            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    
    return result

# Test
print("\n--- 3Sum (Zero Sum Triplets) ---")
print(three_sum([-1, 0, 1, 2, -1, -4]))  # [[-1, -1, 2], [-1, 0, 1]]
print(three_sum([0, 0, 0, 0]))           # [[0, 0, 0]]

print("\n✅ All two-pointer Python examples completed!")

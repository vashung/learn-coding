// Two Pointers Pattern - Java Examples
// Practical implementations of two-pointer technique

import java.util.*;

public class TwoPointersExamples {

    /**
     * Problem 1: Two Sum II (Sorted Array)
     * Find two numbers that add up to target
     * 
     * INPUT: nums = [2, 7, 11, 15], target = 9
     * OUTPUT: [2, 7] or indices [1, 2]
     */
    public static int[] twoSum(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        
        while (left < right) {
            int sum = nums[left] + nums[right];
            
            if (sum == target) {
                return new int[]{nums[left], nums[right]};
            }
            
            if (sum < target) {
                left++; // Need larger sum
            } else {
                right--; // Need smaller sum
            }
        }
        
        return null; // No solution found
    }

    /**
     * Problem 2: Valid Palindrome
     * Check if string is palindrome (ignoring spaces & case)
     * 
     * INPUT: "race car"
     * OUTPUT: true
     */
    public static boolean isPalindrome(String s) {
        // Clean string
        String cleaned = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        
        int left = 0;
        int right = cleaned.length() - 1;
        
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }

    /**
     * Problem 3: Remove Duplicates from Sorted Array
     * Remove duplicates in-place, return new length
     * 
     * INPUT: [1, 1, 1, 2, 2, 3]
     * OUTPUT: 3
     */
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        
        int i = 0; // Pointer for unique element position
        
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        
        return i + 1; // Return count of unique elements
    }

    /**
     * Problem 4: Container With Most Water
     * Find two lines that hold the most water
     * 
     * INPUT: [1, 8, 6, 2, 5, 4, 8, 3, 7]
     * OUTPUT: 49
     */
    public static int maxArea(int[] heights) {
        int left = 0;
        int right = heights.length - 1;
        int maxWater = 0;
        
        while (left < right) {
            // Calculate current water area
            int width = right - left;
            int height = Math.min(heights[left], heights[right]);
            int area = width * height;
            
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

    /**
     * Problem 5: Merge Sorted Arrays
     * Merge two sorted arrays into one
     * 
     * INPUT: nums1 = [1, 2, 4], nums2 = [1, 3, 4]
     * OUTPUT: [1, 1, 2, 3, 4, 4]
     */
    public static int[] mergeSortedArrays(int[] nums1, int[] nums2) {
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0;
        
        // Compare and add smaller element
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                result.add(nums1[i]);
                i++;
            } else {
                result.add(nums2[j]);
                j++;
            }
        }
        
        // Add remaining elements
        while (i < nums1.length) {
            result.add(nums1[i]);
            i++;
        }
        
        while (j < nums2.length) {
            result.add(nums2[j]);
            j++;
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    /**
     * Problem 6: Reverse String (In-place)
     * Reverse string using two pointers
     * 
     * INPUT: "hello"
     * OUTPUT: "olleh"
     */
    public static String reverseString(String s) {
        char[] arr = s.toCharArray();
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            // Swap elements
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            left++;
            right--;
        }
        
        return new String(arr);
    }

    /**
     * Problem 7: 3Sum (Zero Sum Triplets)
     * Find all unique triplets that sum to zero
     * 
     * INPUT: [-1, 0, 1, 2, -1, -4]
     * OUTPUT: [[-1, -1, 2], [-1, 0, 1]]
     */
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            // Use two pointers for remaining array
            int left = i + 1;
            int right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    
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

    // Test method
    public static void main(String[] args) {
        // Test Two Sum
        System.out.println("--- Two Sum II ---");
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // [2, 7]
        
        // Test Palindrome
        System.out.println("\n--- Valid Palindrome ---");
        System.out.println(isPalindrome("race car"));        // true
        System.out.println(isPalindrome("hello"));           // false
        
        // Test Remove Duplicates
        System.out.println("\n--- Remove Duplicates ---");
        int[] arr1 = {1, 1, 1, 2, 2, 3};
        int len1 = removeDuplicates(arr1);
        System.out.println("Length: " + len1);  // 3
        
        // Test Container
        System.out.println("\n--- Container With Most Water ---");
        System.out.println(maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7})); // 49
        
        // Test Merge
        System.out.println("\n--- Merge Sorted Arrays ---");
        System.out.println(Arrays.toString(mergeSortedArrays(
            new int[]{1, 2, 4}, new int[]{1, 3, 4}
        ))); // [1, 1, 2, 3, 4, 4]
        
        // Test Reverse
        System.out.println("\n--- Reverse String ---");
        System.out.println(reverseString("hello")); // olleh
        
        // Test 3Sum
        System.out.println("\n--- 3Sum ---");
        System.out.println(threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
        
        System.out.println("\n✅ All two-pointer Java examples completed!");
    }
}

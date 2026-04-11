class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     let start = 0;
    //     let end = nums.length-1;
    //     let arr = [];
    //     while (start < end) {
    //         console.log("(nums[start] + nums[end])", (nums[start] + nums[end]))
    //         if ((nums[start] + nums[end]) === target) {
    //             console.log("I am start and end", start, end);
    //             arr.push(start);
    //             arr.push(end);
    //             break;
    //         }   
    //         else if(Math.abs(nums[start] + nums[end])>target){
    //             end = end-1;
    //         } else{
    //             start = start + 1;
    //         }
    //     }
    //     console.log(arr, "----------->");
    //     return arr;
    // }
    twoSum(nums, target) {
    // Step 1: Create an array of objects with the value and the original index
    let numsWithIndex = nums.map((value, index) => ({ value, index }));
    
    // Step 2: Sort the array by the value (not the original index)
    numsWithIndex.sort((a, b) => a.value - b.value);

    // Step 3: Initialize two pointers
    let start = 0;
    let end = numsWithIndex.length - 1;

    // Step 4: Use two-pointer technique to find the target sum
    while (start < end) {
        let sum = numsWithIndex[start].value + numsWithIndex[end].value;

        if (sum === target) {
            // Return the original indices of the two elements
            return [numsWithIndex[start].index, numsWithIndex[end].index];
        } 
        else if (sum > target) {
            end--;  // Decrease the end pointer to reduce the sum
        } else {
            start++;  // Increase the start pointer to increase the sum
        }
    }

    // Step 5: If no pair is found, return an empty array
    return [];
}

}

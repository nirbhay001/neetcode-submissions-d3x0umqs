class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let newArr = new Set(nums);
       return Array.from(newArr).length !== nums.length;
    }
}

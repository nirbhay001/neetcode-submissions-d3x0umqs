class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
    k = k % nums.length;

    let temp = nums.slice(nums.length - k);
    let result = [...temp, ...nums.slice(0, nums.length - k)];

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
    }
}

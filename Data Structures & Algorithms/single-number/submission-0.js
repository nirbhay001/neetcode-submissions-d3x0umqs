class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ret = 0;
        for(let i=0;i<nums.length;i++){
            ret ^=nums[i];
        }
        return ret;
    }
}

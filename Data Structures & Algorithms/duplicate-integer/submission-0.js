class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();
        for(let index = 0;index<nums.length; index++){
            if(map[nums[index]]){
                return true;
            } else {
                map[nums[index]] = true;
            }
        }
        return false;
    }
}

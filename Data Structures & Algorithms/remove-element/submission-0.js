class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i=0;
        for(let index = 0;index<nums.length; index++){
            if(nums[index] !== val){
                nums[i]=nums[index];
                i++;
            }
        }
       return i;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length-1;
        let middle = 0;
        while(left <= right){
            middle = Math.floor((left+right)/2);
            if(target === nums[middle]){
                return middle;
            } else if (target < nums[middle]){
                right = middle-1;
            } else{
                left = middle+1;
            }
        }
        return left;
    }
}

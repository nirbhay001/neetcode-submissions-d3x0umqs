class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start=0;
        let end=nums.length;
        while(start<end){
            let mid= Math.floor((start+end)/2);
            if(nums[mid]===target){
                return mid;
            } else if(nums[mid]<target){
                start++;
            } else{
                end--;
            }
        }
        return -1;
    }
}

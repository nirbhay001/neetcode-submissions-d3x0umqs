class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0; i<nums.length;i++){
            for(let j=0;j<=nums.length-i-1;j++){
                if(nums[j] > nums[j+1]){
                    let k=nums[j];
                    nums[j]=nums[j+1];
                    nums[j+1]=k;
                }
            }
        }
        return nums;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let index = 0;
        let sum = 0;
        function findAllXor(nums, index, xor){
            sum += xor;
            for(let i = index; i<nums.length; i++){
                findAllXor(nums, i+1, xor^nums[i]);
            }
        }
        findAllXor(nums, index, 0);
        return sum;
    }
}

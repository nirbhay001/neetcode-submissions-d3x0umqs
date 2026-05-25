class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let arr = [];
        function backtracking(index, curr, sum){
            if(sum === target){
                arr.push([...curr]);
            }
            if(sum > target){
                return;
            }
            for(let i = index; i < nums.length ; i++) {
                curr.push(nums[i]);
                backtracking(i, curr, nums[i]+sum);
                curr.pop();
            }
        }
        backtracking(0, [], 0);
        return arr;
    }
}

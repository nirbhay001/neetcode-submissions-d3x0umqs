class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let arr = [];
        nums.sort((a, b) => a - b);
        function backtrack(index, curr) {
            arr.push([...curr]);
            for (let i = index; i < nums.length; i++) {
                if (i > index && nums[i] === nums[i - 1]) {
                    continue;
                }
                curr.push(nums[i]);
                backtrack(i + 1, curr);
                curr.pop();
            }
        }
        backtrack(0, []);
        return arr;
    }
}

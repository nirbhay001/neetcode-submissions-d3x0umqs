class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let arr = [];
        let arrLength = nums.length;
        let used = new Array(nums.length).fill(false);
        function backtrack(curr) {
            if (curr.length === arrLength) {
                arr.push([...curr]);
                return;
            }
            for (let i = 0; i < arrLength; i++) {
                if (used[i]) {
                    continue;
                }
                used[i] = true;
                curr.push(nums[i]);
                backtrack(curr);
                curr.pop();
                used[i] = false;
            }
        }
        backtrack([]);
        return arr;
    }
}

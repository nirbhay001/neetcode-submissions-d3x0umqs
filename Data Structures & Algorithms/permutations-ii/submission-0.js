class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let arr = [];
        let arrLength = nums.length;
        let used = new Array(arrLength).fill(false);
        nums.sort((a, b) => a - b);
        function backTrack(curr) {
            if (curr.length === arrLength) {
                arr.push([...curr]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) {
                    continue;
                }
                if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                    continue;
                }
                used[i] = true;
                curr.push(nums[i]);
                backTrack(curr);
                curr.pop();
                used[i] = false;
            }
        }
        backTrack([]);
        return arr;
    }
}

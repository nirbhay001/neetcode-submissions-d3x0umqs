class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let arr = [];
        candidates.sort((a, b) => a - b);
        function backtrack(index, curr, sum) {
            if (sum > target) {
                return;
            }
            if (sum === target) {
                arr.push([...curr]);
            }
            for (let i = index; i < candidates.length; i++) {
                if (i > index && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                curr.push(candidates[i]);
                backtrack(i + 1, curr, sum + candidates[i]);
                curr.pop();
            }
        }
        backtrack(0, [], 0);
        return arr;
    }
}

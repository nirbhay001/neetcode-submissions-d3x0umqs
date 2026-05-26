class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let arr = [];
        function backtrack(index, curr){
            if(curr.length === k){
                arr.push([...curr]);
            }
            for(let i = index; i <= n; i++){
                curr.push(i);
                backtrack(i+1, curr);
                curr.pop();
            }
        }
        backtrack(1, []);
        return arr;
    }
}

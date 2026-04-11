class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function beckTracking(str, start, end){
            if(start==n && end === n){
                result.push(str);
                return;
            }
            if(start<n){
                beckTracking(str+'(', start+1, end);
            }
            if(end<start){
               beckTracking(str+')', start, end+1);
            }
        }
        beckTracking('', 0, 0);
        return result;
    }
}

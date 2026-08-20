class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lengthData = 1;
        let str=[];
        if(!s.length){
            return 0;
        }
        for(let i = 0; i<s.length;i++){
            while(str.includes(s[i])){
                str.shift();
            }
            str.push(s[i]);
            lengthData = Math.max(lengthData, str.length);
        }
        return lengthData;
    }
}

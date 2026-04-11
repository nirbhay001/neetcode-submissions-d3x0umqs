class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lengthData = 1;
        if(!s.length){
            return 0;
        }
        let str = [];
        for(let i=0;i<s.length;i++){
            while(str.includes(s[i])){
                str.shift();
            } 
            str.push(s[i]);
            console.log('U am str', str);
            lengthData = Math.max(lengthData, str.length);
        }
        return lengthData;
    }
}

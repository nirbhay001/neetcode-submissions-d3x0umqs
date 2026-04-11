class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let max = 0;
        let result = 0;
        let freq = {};
        for(let right = 0; right<s.length; right++){
        freq[s[right]] = (freq[s[right]] || 0) + 1;
        max = Math.max(max, freq[s[right]]);
        while((right-left+1) - max >k){
            freq[s[left]]--
            left++;
        }
        result = Math.max(result, right - left + 1)
        }
        return result;
    }
}

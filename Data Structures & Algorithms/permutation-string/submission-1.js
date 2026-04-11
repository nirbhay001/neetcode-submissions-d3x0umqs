class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length;
        for(let index = 0; index<s2.length;index++){
            let string = s2.slice(index, index+k);
            if(string.split('').sort().join('') == s1.split("").sort().join('')){
                return true;
            }
        }
        return false;
    }
}

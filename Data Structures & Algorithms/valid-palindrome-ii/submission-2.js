class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        for(let i=0;i<s.length;i++){
            let stre = s.slice(0, i)+s.slice(i+1);
            if(stre == stre.split('').reverse().join('')){
                return true;
            }
        }
        return false;
    }
}

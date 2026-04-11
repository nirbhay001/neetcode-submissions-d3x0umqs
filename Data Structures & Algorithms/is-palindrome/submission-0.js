class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const combineString = s.split("").filter((char) => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join("");
        let start = 0;
        let end = combineString.length-1;
        while(start < end) {
            let firstChar = combineString[start].toLowerCase();
            let lastChar = combineString[end].toLowerCase();
            if(firstChar !== lastChar){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let newStr = strs.sort();
        console.log(newStr, '--->');
        let firstElement = newStr[0];
        let lastElement = newStr[newStr.length-1];
        let str = ''
        for(let index = 0; index<lastElement.length; index++){
            if(firstElement[index] === lastElement[index]){
                str+= firstElement[index];
            } else {
                return str;
            }
        }
        return str;
    }
}

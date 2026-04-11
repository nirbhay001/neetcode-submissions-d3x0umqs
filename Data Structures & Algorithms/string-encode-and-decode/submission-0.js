class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded='';
        for(let i=0; i<strs.length; i++){
           encoded += strs[i].length + '#' + strs[i];
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let arr = [];
        while(i<str.length){
            let index = str.indexOf('#', i);
            let length = Number(str.substring(i, index));
            i = index+1;
            console.log('length', length, i);
            arr.push(str.substring(i, length+i));
            i+=length;
        }   
        return arr;
    }
}

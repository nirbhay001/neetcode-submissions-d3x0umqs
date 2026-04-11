class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let index = 0; index < strs.length; index++){
            let data = strs[index];
            data = data.split("").sort();
            data = data.join("");
            if(map[data]){
                map[data].push(strs[index]);
            } else {
                map[data] = [strs[index]];
            }
        }
        let arr = Object.values(map);
        return arr;
        
    }
}

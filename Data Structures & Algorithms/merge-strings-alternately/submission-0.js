class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let string = '';
        let first=0;
        let second=0
        while(first < word1.length || second < word2.length){
            if(first < word1.length && second < word2.length){
                string+=(word1[first]+word2[second]);
                first++;
                second++;
                console.log('Strong', string);
            } else if(first < word1.length){
                string+=word1[first];
                first++;
            } else{
                string+=word2[second];
                second++;
            }
        }
        return string;
    }
}

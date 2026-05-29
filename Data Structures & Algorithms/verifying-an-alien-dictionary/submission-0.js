class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let map = {};
        for (let i = 0; i < order.length; i++) {
            map[order[i]] = i;
        }
        for (let i = 1; i < words.length; i++) {
            let first = words[i - 1];
            let second = words[i];
            let start = first.length;
            let final = second.length;
            let index = 0;
            while (index < start && index < final) {
                if (first[index] !== second[index]) {
                    if (map[first[index]] > map[second[index]]) {
                        return false;
                    }
                    break;
                }
                index++;
            }
            if (index === final && start > final) {
                return false;
            }
        }
        return true;
    }
}

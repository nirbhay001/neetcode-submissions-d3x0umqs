class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
    return arr
        .sort((a, b) => {
            let diffA = Math.abs(a - x);
            let diffB = Math.abs(b - x);

            if (diffA === diffB) return a - b; // smaller element first
            return diffA - diffB;
        })
        .slice(0, k)
        .sort((a, b) => a - b); // final sorted result
    }
}

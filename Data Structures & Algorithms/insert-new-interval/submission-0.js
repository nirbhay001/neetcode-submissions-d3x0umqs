class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let newArr = [];
        let first = newInterval[0];
        let second = newInterval[1];
        for (let [i, j] of intervals) {
            if (j < first) {
                newArr.push([i, j]);
            } else if (second < i) {
                newArr.push([first, second]);
                first = i;
                second = j;
            } else {
                first = Math.min(first, i);
                second = Math.max(second, j);
            }
        }
        newArr.push([first, second]);
        return newArr;
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let newArr = [];
        intervals.sort((a, b) => a[0] - b[0]);
        let first = intervals[0][0];
        let second = intervals[0][1];
        for (let k = 1; k < intervals.length; k++) {
            let [i, j] = intervals[k];
            if (i > second) {
                newArr.push([first, second]);
                first = i;
                second = j;
            }else {
                first = Math.min(first, i);
                second = Math.max(second, j);
            }
        }
        newArr.push([first, second]);
        return newArr;
    }
}

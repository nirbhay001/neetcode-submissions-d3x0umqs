class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let count = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            if(start < prevEnd){
                count++;
            } else {
                prevEnd = end;
            }
        }

        return count;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;
        let max = 0;
        while(start<end){
            let length = end-start;
            let area = length * Math.min(heights[start], heights[end]);
            max=Math.max(max, area);
            if(heights[end]>heights[start]){
                start++;
            }else{
                end--;
            }
        }
        return max;
    }
}

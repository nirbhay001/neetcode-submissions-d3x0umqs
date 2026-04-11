class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;
        let maxArea = 0;
        while(start < end){
            let distance = end-start;
            let height = Math.min(heights[start], heights[end])
            let area = distance * height;
            maxArea = Math.max(maxArea , area);
            if(heights[start] < heights[end]){
                start++;
            } else {
                end--;
            }
        }
        return maxArea;
    }
        
}

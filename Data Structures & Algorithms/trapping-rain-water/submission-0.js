class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let left = 0;
        let right = 0;
        leftMax[0] = height[0];
         let rightMax = new Array(height.length);
        rightMax[height.length-1] = [height[height.length - 1]];
        for (let index = 1; index < height.length; index++) {
            left = Math.max(height[index], leftMax[index - 1]);
            leftMax[index] = left;
        }
        for (let index = height.length - 2; index >= 0; index--) {
            right = Math.max(height[index], rightMax[index + 1]);
            rightMax[index] = right;
        }
        let water = 0;
        for (let index = 0; index < height.length; index++) {
            water += Math.min(leftMax[index], rightMax[index])-height[index];
        }

        return water;
    }
}

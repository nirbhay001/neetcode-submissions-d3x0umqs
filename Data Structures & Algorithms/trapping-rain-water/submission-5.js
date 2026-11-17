class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // let n = height.length;
        // let leftMax = new Array(n);
        // let rightMax = new Array(n);
        // let water = 0;
        // leftMax[0] = height[0];
        // rightMax[n - 1] = height[n - 1];
        // for (let i = 1; i < n; i++) {
        //     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        // }
        // for (let i = n - 2; i >= 0; i--) {
        //     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        // }

        // for (let i = 0; i < n; i++) {
        //     water += (Math.min(rightMax[i], leftMax[i])) - height[i];
        // }
        // return water;
        let water = 0;
        let leftmax = 0;
        let rightMax = 0;
        let left = 0;
        let right = height.length - 1;
        while (left < right) {
            if (height[left] <= height[right]) {
                if (leftmax < height[left]) {
                    leftmax = height[left];
                } else {
                    water += leftmax - height[left];
                }
                left++;
            } else {
                if (rightMax <= height[right]) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        return water;
    }
}

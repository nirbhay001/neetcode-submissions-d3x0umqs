class Solution {
    minSubArrayLen(target, nums) {
        let sum = 0;
        let left = 0;
        let min = Infinity;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum >= target) {
                while (sum >= target) {
                    min = Math.min(min, i - left + 1);
                    sum -= nums[left];
                    left++;
                }
            }
        }

        return min === Infinity ? 0 : min;
    }
}
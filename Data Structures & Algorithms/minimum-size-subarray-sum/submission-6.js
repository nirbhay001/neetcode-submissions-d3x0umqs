class Solution {
    minSubArrayLen(target, nums) {
        let minLength = Infinity;
        let left = 0;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            while (sum >= target) {
                minLength = Math.min(minLength, (i-left + 1))
                sum -= nums[left];
                left ++;
            }
        }
        return minLength == Infinity ? 0 : minLength;
    }
}

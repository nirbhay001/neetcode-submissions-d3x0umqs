class Solution {
    minSubArrayLen(target, nums) {
        // let sum = 0;
        // let left = 0;
        // let min = Infinity;

        // for (let i = 0; i < nums.length; i++) {
        //     sum += nums[i];

        //     if (sum >= target) {
        //         while (sum >= target) {
        //             min = Math.min(min, i - left + 1);
        //             sum -= nums[left];
        //             left++;
        //         }
        //     }
        // }

        // return min === Infinity ? 0 : min;

        let sum = 0;
        let start = 0;
        let count = Infinity;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            while(sum >= target) {
                count = Math.min(count, i - start + 1);
                sum -= nums[start]
                start ++;
            } 
        }
        return count == Infinity ? 0 : count;

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);
        let longestStreak = 0;

        for(let data of nums) {
            if(!map.has(data-1)){
                let currentNum = data;
                let currentStreak = 1;

                while(map.has(currentNum+1)){
                    currentStreak++;
                    currentNum++;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}

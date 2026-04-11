class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        let mapKey = 0;
        let returnKey = 0;
        for(let i = 0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0)+1)
        }
        for(let [key, value] of map){
            if(value>mapKey){
                returnKey = key;
                mapKey=value;
            }
        }
        return returnKey;
    }
}

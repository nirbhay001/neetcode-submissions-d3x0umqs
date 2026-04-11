class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map();
        let retArr = [];
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i])+1);
            } else{
                map.set(nums[i], 1)
            }
        }
        for( let [key, value] of map){
            if(value > Math.floor(nums.length/3)){
                retArr.push(key);
            }
        }
        return retArr;
    }
}

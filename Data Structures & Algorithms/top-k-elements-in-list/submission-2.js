class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        const retArr = [];
        for (let index = 0; index < nums.length; index++) {
            if (map[nums[index]]) {
                map[nums[index]]++;
            } else {
                map[nums[index]] = 1;
            }
        }

        const arrData = Object.entries(map).sort((a,b) => b[1]-a[1]);
        for(let index = 0 ; index < k ; index++){
            retArr.push(+arrData[index][0]);
        }

        return retArr;
        
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(let i = 0; i<nums.length;i++){
            if(map[nums[i]]){
               map[nums[i]]++; 
            } else {
                map[nums[i]] = 1;
            }
        }
        const data = [...Object.entries(map)].sort((a,b) => a[1]-b[1]);
        console.log('I am data', data);
        return data.slice(-k).map((item) => item[0]);
    }
}

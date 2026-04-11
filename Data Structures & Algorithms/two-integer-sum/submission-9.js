class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    // nums.sort((a, b) => a - b); 
    //   let start = 0;
    //   let end = nums.length-1;
    //   while(start<end){
    //     let sum = nums[start] + nums[end];
    //     if(sum === target){
    //         return [start, end];
    //     } else if(sum > target){
    //         end--;
    //     } else{
    //         start++;
    //     }
    //   }  
    //   return null;
    let map = {};
    for(let index=0;index<nums.length;index++){
        if(map[nums[index]] != undefined){
            return [map[nums[index]], index];
        } else{
            map[target-nums[index]] = index;
        }
    }
    console.log('map', map)
    return [null, null]
    }
}

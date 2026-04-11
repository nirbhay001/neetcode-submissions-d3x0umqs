class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    //    let newArr = new Set(nums);
    //    return Array.from(newArr).length !== nums.length;
    // const map = {};
    // for(let i=0;i<nums.length;i++){
    //     if(map[nums[i]]){
    //         return true;
    //     } else{
    //         map[nums[i]] = i+1;
    //     }
    // }
    // return false;
    // }
    let newArr = new Set(nums);
    return Array.from(newArr).length !== nums.length;
    }
}

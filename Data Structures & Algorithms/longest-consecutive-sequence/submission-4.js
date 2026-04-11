class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = nums.sort((a,b) => a-b);
        let count = 1;
        let maxLength = 1;
        if(!nums.length){
            return 0;
        }
        for(let i = 1; i<nums.length; i++){
            if(nums[i-1]+1 === nums[i]){
                count++;
            } else if (nums[i-1] === nums[i]){
                count = count;
            } else{
                count = 1;
            }
            maxLength = Math.max(maxLength, count);
        }
        return maxLength;

        // secons approach
        // let map = new Set(nums);
        // let maxLength = 0;
        // for(let i=0; i<nums.length;i++){
        //     if(!map.has(nums[i]-1)){
        //         let data = nums[i];
        //         let count = 1;
        //         while(map.has(data+1)){
        //             count++;
        //             data++;
        //         }
        //         maxLength = Math.max(maxLength, count);
        //     }
        // }
        // return maxLength;
    }
}

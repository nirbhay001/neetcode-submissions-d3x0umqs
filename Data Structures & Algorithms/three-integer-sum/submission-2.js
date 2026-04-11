class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let retArr = [];
        nums.sort((a, b) => a - b);
        console.log('nums', nums);
        for(let index = 0; index<nums.length-2;index++){
            if (index > 0 && nums[index] === nums[index - 1]) continue;
            let left = index+1;
            let right = nums.length-1;
            while(left<right) {
                let sum = nums[left]+nums[right]+nums[index];
                if(sum === 0){
                    retArr.push([nums[index], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;

                } else if(sum > 0){
                    right--;
                } else {
                    left++;
                }
            }

        }
        return retArr;
    }
}


// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[][]}
//      */
//     threeSum(nums) {
//         let retArr = [];
//         nums.sort((a, b) => a - b);

//         for (let index = 0; index < nums.length - 2; index++) {
//             if (index > 0 && nums[index] === nums[index - 1]) continue;

//             let left = index + 1;
//             let right = nums.length - 1;

//             while (left < right) {
//                 let sum = nums[index] + nums[left] + nums[right];

//                 if (sum === 0) {
//                     retArr.push([nums[index], nums[left], nums[right]]);
//                     while (left < right && nums[left] === nums[left + 1]) left++;
//                     while (left < right && nums[right] === nums[right - 1]) right--;
//                     left++;
//                     right--;
//                 } else if (sum > 0) {
//                     right--;
//                 } else {
//                     left++;
//                 }
//             }
//         }

//         return retArr;
//     }
// }

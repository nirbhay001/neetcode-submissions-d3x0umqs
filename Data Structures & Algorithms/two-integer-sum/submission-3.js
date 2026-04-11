class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let data = [...nums].sort((a,b) => a-b);
        let start = 0;
        let end = nums.length-1;
        let arr = [];
        while (start < end) {
            if ((data[start] + data[end]) === target) {
                let first = nums.indexOf(data[start]);
                let last = nums.lastIndexOf(data[end]);
                arr.push(first);
                arr.push(last);
                break;
            }   
            else if((data[start] + data[end])>target){
                end = end-1;
            } else{
                start = start + 1;
            }
        }
        console.log(arr, "----------->");
        return arr;
    }
}

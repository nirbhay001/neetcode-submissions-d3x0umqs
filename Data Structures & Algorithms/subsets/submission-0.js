class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let arr =[];
        function search(index, curr){
            arr.push([...curr]);
            let a = [];
            for(let i = index; i< nums.length; i++){
                curr.push(nums[i]);
                search(i+1, curr);
                curr.pop();
            }
        }
        search(0, []);
        return arr;
    }
}

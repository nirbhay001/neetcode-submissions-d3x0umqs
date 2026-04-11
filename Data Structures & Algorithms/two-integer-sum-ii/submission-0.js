class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;
        let retArr = [];
        while (start < end) {
            let sum = numbers[start] + numbers[end];
            if (sum === target) {
                retArr.push(start + 1);
                retArr.push(end + 1);
                break;
            } else if (sum > target) {
                end--;
            } else {
                start++;
            }
        }
        return retArr;
    }
}

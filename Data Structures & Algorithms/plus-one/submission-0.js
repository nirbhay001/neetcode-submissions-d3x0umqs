class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1;
        for (let i = digits.length-1; i >= 0; i--) {
            let sum = Number(digits[i]) + carry;
            carry = sum >= 10 ? sum / 10 : 0;
            let dig = sum >= 10 ? sum % 10 : sum;
            digits[i] = dig;
        }
        if(carry){
            digits.unshift(carry);
        }
        return digits;
    }
}

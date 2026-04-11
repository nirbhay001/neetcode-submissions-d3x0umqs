class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(let i=0;i<operations.length;i++){
            let indexValue = operations[i];
            if(indexValue === '+'){
                let sum=0;
                sum=stack[stack.length-1]+stack[stack.length-2]
                stack.push(sum);
            } else if(indexValue === 'C'){
                stack.pop();
            } else if(indexValue === 'D'){
                let multiply=2*stack[stack.length-1];
                stack.push(multiply);
            } else{
                stack.push(Number(indexValue));
            }
        }
        console.log('i am stack', stack);
        let sumv = 0
        for(let j=0;j<stack.length;j++){
            sumv+=Number(stack[j]);
        }
        return sumv;
    }
}

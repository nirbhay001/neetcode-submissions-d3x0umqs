class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //First Approach
        // let max = 0;
        // for(let i=0;i<prices.length-1;i++){
        //     for(let j=i+1; j<prices.length; j++){
        //         max = Math.max(max, prices[j]-prices[i]);
        //     }
        // };
        // return max;
        // second approach
        let today = prices[0];
        let max = 0;
        for(let i=0;i<prices.length-1;i++){
            today = Math.min(today, prices[i]);
            max = Math.max(max, prices[i+1]-today);
        }
        return max;
    }
}

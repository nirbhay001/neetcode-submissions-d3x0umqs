class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let start = Math.max(...weights);
        let end = weights.reduce((a,b) => a + b, 0);
        let ans = end;
        while(start <= end){
            let mid = Math.floor((start + end)/2);
            let requiredDay = 1;
            let currentWeight = 0;
            for(let i = 0; i < weights.length; i++){
                if(currentWeight + weights[i] > mid){
                    requiredDay++;
                    currentWeight = 0;
                }
                currentWeight += weights[i];
            }

            if(requiredDay <= days){
                end = mid - 1;
                ans = mid;
            } else{
                start = mid + 1;
            }

        }
        return ans;
    }
}

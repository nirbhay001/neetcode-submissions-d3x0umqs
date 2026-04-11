class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = Math.max(...piles);
        let ans = end;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            let completeHour = 0;
            for(let i=0; i < piles.length;i++){
                completeHour += Math.ceil(piles[i]/mid)
            }
            if(completeHour <= h){
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
}

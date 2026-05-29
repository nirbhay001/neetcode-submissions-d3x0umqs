class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let trustu = new Array(n+1).fill(0);
        let trustedBy = new Array(n+1).fill(0);
        for(let [a, b] of trust){
            trustu[a]++;
            trustedBy[b]++;
        }
        for(let i = 1; i<=n;i++){
            if(trustedBy[i] == n-1 && trustu[i] == 0){
                return i;
            }
        }
        return -1;
    }

}

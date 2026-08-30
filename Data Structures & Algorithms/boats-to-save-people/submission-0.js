class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let p = people.sort((a, b) => a - b);
        let start = 0;
        let end = people.length - 1;
        let boat = 0;
        while (start <= end) {
            let sum = people[start] + people[end];
            if (sum <= limit) {
                start++;
                end--;
            } else {
                end--;
            }
            boat++;
        }
        return boat;
    }
}

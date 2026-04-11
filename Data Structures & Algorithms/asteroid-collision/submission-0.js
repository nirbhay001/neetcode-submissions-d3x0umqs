class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (let asteroid of asteroids) {
            while (
                stack.length &&
                stack[stack.length - 1] > 0 &&
                asteroid < 0
            ) {
                let top = stack[stack.length - 1];

                if (top < -asteroid) {
                    stack.pop();
                    continue;
                } 
                if (top === -asteroid) {
                    stack.pop();
                }

                asteroid = 0; // current destroyed
                break;
            }

            if (asteroid !== 0) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}
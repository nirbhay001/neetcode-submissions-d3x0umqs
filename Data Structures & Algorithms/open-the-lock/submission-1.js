class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const dead = new Set(deadends);
        if (dead.has("0000")) return -1;
        let queue = ["0000"];
        let visited = new Set(["0000"]);
        let move = 0;
        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let element = queue.shift();
                if(element === target){
                    return move;
                }
                for (let j = 0; j < 4; j++) {
                    let digit = Number(element[j]);
                    let up = element.slice(0, j) + ((digit + 1) % 10) + element.slice(j + 1);
                    let down = element.slice(0, j) + ((digit + 9) % 10) + element.slice(j + 1);
                    if (!dead.has(up) && !visited.has(up)) {
                        visited.add(up);
                        queue.push(up);
                    }
                    if (!dead.has(down) && !visited.has(down)) {
                        visited.add(down);
                        queue.push(down);
                    }
                }
            }
            move++;
        }
        return -1;
    }
}

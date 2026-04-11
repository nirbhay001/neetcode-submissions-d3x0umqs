class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let index = 0; index < tokens.length; index++) {
            let char = tokens[index];
            if (char === "+") {
                let first = +stack.pop();
                let second = +stack.pop();
                stack.push(first + second);
            } else if (char === "-") {
                let first = +stack.pop();
                let second = +stack.pop();
                stack.push(second-first);
            } else if (char === "*") {
                let first = +stack.pop();
                let second = +stack.pop();
                stack.push(second*first);
            } else if (char === "/") {
                let first = +stack.pop();
                let second = +stack.pop();
                stack.push(Math.trunc(second / first));
            } else {
                stack.push(+char);
            }
        }
        return Math.round(stack[0]);
    }
}

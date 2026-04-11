class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let index = 0; index < s.length; index++) {
            if (['[', '{', '('].includes(s[index])) {
                stack.push(s[index]);
            } else if (']' === s[index]) {

                if (stack.pop() !== '[') {
                    return false;
                }
            } else if ('}' === s[index]) {
                if (stack.pop() !== '{') {
                    return false;
                }
            } else if (')' === s[index]) {
                if (stack.pop() !== '(') {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

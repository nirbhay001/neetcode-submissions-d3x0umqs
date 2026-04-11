class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        if(s.length <= 1){
            return false
        }
        for(let index = 0; index<s.length;index++){
            if(['(', '{', '['].includes(s[index])){
                arr.push(s[index]);
            } else {
                let element = arr.pop();
                if(s[index] === ']'){
                    if(element!=='['){
                        return false;
                    }
                } else if(s[index] === '}'){
                    if(element!=='{'){
                        return false;
                    }
                } else if(s[index] === ')'){
                    if(element!=='('){
                        return false;
                    }
                } else{
                    return false;
                }
            }
            console.log('arr', arr);
        }
        return arr.length === 0;
    }
}

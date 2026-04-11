class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let st='';
        for(let i=0;i<s.length;i++){
            if (((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')|| (s[i] >= '0' && s[i] <= '9'))) {
                st+=s[i].toLowerCase();
            }
        }
    let l = 0, r = st.length - 1;
    while (l <= r) {
    if (st[l] !== st[r]) return false;
    l++;
    r--;
}
return true;
    }
}

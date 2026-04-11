class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
    let arr = new Array(m+n).fill(0);
    let index = 0;
    let first = 0;
    let second = 0;

    while (first < m && second < n) {
        if (nums1[first] <= nums2[second]) {
            arr[index] = nums1[first];
            first++;
            index++;
        } else {
            arr[index] = nums2[second];
            second++;
            index++;
        }
    }
    while(first < m){
        arr[index]=(nums1[first]);
        first++;
        index++
    }

    while(second < n){
        arr[index]=(nums2[second]);
        second++;
        index++
    }
    for(let i=0;i<m+n;i++){
        nums1[i]=arr[i]
    }

    }
}

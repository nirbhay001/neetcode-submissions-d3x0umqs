class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = [];
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */

    getParent(val) {
        return Math.floor((val - 1) / 2);
    }
    add(val) {
        this.nums.push(val);
        let heapLength = this.nums.length - 1;
        while (heapLength > 0) {
            let parent = this.getParent(heapLength);
            if (this.nums[heapLength] < this.nums[parent]) {
                [this.nums[heapLength], this.nums[parent]] = [this.nums[parent], this.nums[heapLength]];
                heapLength = parent;
            } else{
                break;
            }
        }
        if(this.nums.length > this.k){
            this.nums[0] = this.nums.pop();
            let i = 0;
            let n = this.nums.length;
            while(true){
                let smallest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                if(left < n && this.nums[left] < this.nums[smallest]){
                    smallest = left;
                }
                if(right < n && this.nums[right] < this.nums[smallest]){
                    smallest = right;
                }
                if(smallest === i){
                    break;
                }
                [this.nums[smallest], this.nums[i]] = [this.nums[i], this.nums[smallest]];
                i = smallest;
            }
        }

        return this.nums[0];
    }
}

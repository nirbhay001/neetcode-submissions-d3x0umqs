class meanHeap{
    constructor(){
        this.heap = [];
    }

    getParent(i){
        return Math.floor((i-1)/2);
    }
    getLeft(i){
        return Math.floor(2*i) + 1;
    }
    getRight(i){
        return Math.floor(2*i) + 2;
    }
    swap(first, second){
        [this.heap[first], this.heap[second]] = [this.heap[second], this.heap[first]]
    }
    insert(element){
        this.heap.push(element);
        this.heapifyUp();

    }
    heapifyUp(){
        let l = this.heap.length-1;
        while(true){
            let parent = this.getParent(l);
            if(this.heap[parent] < this.heap[l]){
                [this.heap[parent], this.heap[l]] = [this.heap[l], this.heap[parent]];
                l = parent;
            } else {
                break;
            }

        }
    }
    remove(){
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    heapifyDown(){
        let i = 0;
        while(true){
            let left = this.getLeft(i);
            let right = this.getRight(i);
            let smallest = i;
            let lengthD = this.heap.length
            if(left < lengthD && this.heap[left] > this.heap[smallest]){
                smallest = left;
            }
            if(right < lengthD && this.heap[right] > this.heap[smallest]){
                smallest = right;
            }
            if (smallest === i) {
                break;
            }
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest
        }
    };
    size() {
        return this.heap.length;
    };
}


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let minHeap = new meanHeap();
        for(let i = 0; i < stones.length; i++){
            minHeap.insert(stones[i]);
        }
        while(minHeap.size() > 1){
            let y = minHeap.remove();
            let x = minHeap.remove();
            if(y != x){
                minHeap.insert(y-x);
            }
        }
        return minHeap.size()
            ? minHeap.remove()
            : 0;

    }
}


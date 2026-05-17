class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = [];
        for (let i = 0; i < points.length; i++) {
            let [x, y] = points[i];
            let distance = x * x + y * y;
            maxHeap.push({ point: points[i], distance });
            heapifyUp();
            if (maxHeap.length > k) {
                maxHeap[0] = maxHeap[maxHeap.length - 1];
                maxHeap.pop();
                heapifydown();
            }
        }
        let result = [];
        for (let item of maxHeap) {
            result.push(item.point);
        }
        return result;
        function heapifydown() {
            let i = 0;
            while (true) {
                let left = i * 2 + 1
                let right = i * 2 + 2
                let largest = i;
                if(left < maxHeap.length && maxHeap[left].distance > maxHeap[largest].distance){
                    largest = left;
                }
                if(right < maxHeap.length && maxHeap[right].distance > maxHeap[largest].distance){
                    largest = right;
                }
                if(i==largest){
                    break;
                }
                [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];
                i = largest;
            }
        }
        function heapifyUp() {
            let i = maxHeap.length -1;
            while (i>0) {
                let parent = Math.floor((i - 1) / 2);
                if (maxHeap[parent].distance < maxHeap[i].distance) {
                    [maxHeap[parent], maxHeap[i]] = [
                        maxHeap[i], maxHeap[parent]];
                    i = parent;
                } else {
                    break;
                }
            }
        }
    }
}

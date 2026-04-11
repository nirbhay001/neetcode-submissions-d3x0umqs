class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleet = 0;
        let lastTime = 0;
        let cars = [];
        for(let i=0;i<position.length;i++){
            cars.push([position[i], speed[i]]);
        }
        cars=[...cars.sort((a,b)=> b[0]-a[0])]
        for(let [position, speed] of cars){
            let time = (target-position)/speed;
            if(time>lastTime){
                fleet++;
                lastTime=time;
            }
        }
        return fleet;
    }
}

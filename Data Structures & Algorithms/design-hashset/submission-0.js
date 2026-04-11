class MyHashSet {
    constructor() {
        this.size = 3
        this.map = Array.from({ length: this.size }, () => [])
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = key % this.size
        const bucket = this.map[index]

        if (!bucket.includes(key)) {
            bucket.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = key % this.size
        const bucket = this.map[index]

        const pos = bucket.indexOf(key)
        if (pos !== -1) {
            bucket.splice(pos, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = key % this.size
        return this.map[index].includes(key)
    }
}
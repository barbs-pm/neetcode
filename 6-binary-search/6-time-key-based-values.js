class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        // se nao tem inicializa o array
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    // Time complexity: O(logn) pois fazemos uma busca binária
    // Space complexity: O(n) espaço pois guardamos todos os valores
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const values = this.keyStore.get(key) || [];
        let left = 0;
        let right = values.length - 1;
        let result = '';
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}

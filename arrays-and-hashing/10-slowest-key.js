function slowestKey(releaseTimes, keysPressed) {
    let maxTime = releaseTimes[0];
    let maxKey = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        const key = keysPressed[i];
        const time = releaseTimes[i] - releaseTimes[i - 1];

        if (time > maxTime || time === maxTime && key > maxKey) {
            maxKey = key;
            maxTime = time;
        }
    }
    return maxKey;
};

console.log(slowestKey(releaseTimes = [9,29,49,50], keysPressed = "cbcd")); // c
console.log(slowestKey(releaseTimes = [12,23,36,46,62], keysPressed = "spuda")); // a
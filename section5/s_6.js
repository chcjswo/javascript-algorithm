function solution(a) {
    let answer;
    const map = new Map();

    // for (const item of a) {
    //     if (map[item]) {
    //         map[item]++;
    //     } else {
    //         map[item] = 1;
    //     }
    // }
    //
    // let max = 0;
    // for (let key of Object.keys(map)) {
    //     const value = map[key];
    //     if (max < value) {
    //         max = value;
    //         answer = key;
    //     }
    // }

    for (const x of a) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (const [key, value] of map) {
        if (max < value) {
            max = value;
            answer = key;
        }
    }

    console.log(answer);
}

solution('BACBACCACCBDEDEEEEE');
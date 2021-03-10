function solution(a, b) {
    let answer = 'YES';
    let map = new Map();

    for (const item of a) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    for (const item of b) {
        if (map.has(item)) {
            map.set(item, map.get(item) - 1);
        }
    }

    for ([key, value] of map) {
        if (value !== 0) {
            answer = 'NO';
            break;
        }
    }

    console.log(answer);
}

solution('AbaAeCe', 'baeeACA');
solution('abaCC', 'Caaab');
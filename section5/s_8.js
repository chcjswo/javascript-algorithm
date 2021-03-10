function solution(a, b) {
    let answer = 0;
    let sH = new Map();
    let tH = new Map();

    for (const item of b) {
        if (tH.has(item)) {
            tH.set(item, tH.get(item) + 1);
        } else {
            tH.set(item, 1);
        }
    }

    let len = b.length - 1;
    for (let i = 0; i < len; i++) {
        const item = a[i];
        if (sH.has(item)) {
            sH.set(item, sH.get(item) + 1);
        } else {
            sH.set(item, 1);
        }
    }

    let lt = 0;
    for (let rt = len; rt < a.length; rt++) {
        const item = a[rt];
        if (sH.has(item)) {
            sH.set(item, sH.get(item) + 1);
        } else {
            sH.set(item, 1);
        }
        if (compareMaps(sH, tH)) {
            answer++;
        }
        sH.set(a[lt], sH.get(a[lt]) - 1);
        if (sH.get(a[lt]) === 0) {
            sH.delete(a[lt]);
        }
        lt++;
    }

    console.log(answer);
}

function compareMaps(m1, m2) {
    if (m1.size !== m2.size) {
        return false;
    }
    for ([key, value] of m1) {
        if (!m2.has(key) || m2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

solution('bacaAacbac', 'abc');
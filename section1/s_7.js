function solution(a, b) {
    let answer = 0;

    for (const item of b) {
        const c = item + '';
        if (c.length > 1) {
            let strings = c.split('');
            if (parseInt(strings[1]) === a) {
                answer++;
            }
        } else {
            if (parseInt(c) === a) {
                answer++;
            }
        }

    }

    console.log(answer);
}

solution(3, [25, 3, 23, 11, 47, 53, 17, 33]);
solution(0, [12, 20, 54, 30, 87, 91, 30]);
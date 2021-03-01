function solution(a, b) {
    let answer = [];

    for (let i = 0; i < a.length; i++) {
        if ((a[i] === 1 && b[i] === 3) ||
            (a[i] === 2 && b[i] === 1) ||
            (a[i] === 3 && b[i] === 2)) {
            answer.push('A');
        } else if (a[i] === b[i]) {
            answer.push('D')
        } else {
            answer.push('B');
        }
    }

    console.log(answer);
}

solution([2, 3, 3, 1, 3, 1],
    [1, 1, 2, 2, 3, 3]);
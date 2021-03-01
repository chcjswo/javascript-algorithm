function solution(a) {
    let answer = a;
    let sum = a.reduce((a, b) => a + b, 0);

    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - (a[i] + a[j]) === 100) {
                a.splice(j, 1);
                a.splice(i, 1);
            }
        }
    }

    console.log(answer);
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
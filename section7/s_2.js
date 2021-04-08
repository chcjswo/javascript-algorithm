function solution(n, arr) {
    let answer = arr;

    for (let i = n - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (answer[i] < answer[j]) {
                [answer[i], answer[j]] = [answer[j], answer[i]];
            }
        }
    }

    console.log(answer);
}

solution(8, [13, 5, 11, 7, 23, 15, 1, 10]);
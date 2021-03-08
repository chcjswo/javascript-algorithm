function solution(x, a) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= x) {
            answer++;
        }
    }

    console.log(answer);
}

solution(5, [1, 3, 1, 2, 3]);
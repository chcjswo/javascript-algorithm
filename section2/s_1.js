function solution(a) {
    let answer = [];
    answer.push(a[0]);
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] < a[i]) {
            answer.push(a[i]);
        }
    }

    console.log(answer);
}

solution([7, 3, 9, 5, 6, 12]);
function solution(a) {
    let answer = 1;
    let max = a[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            answer++;
            max = a[i];
        }
    }

    console.log(answer);
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);
function solution(a) {
    let answer = 0;
    let continues = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            continues++;
            answer += continues;
        } else {
            continues = 0;
        }
    }

    console.log(answer);
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 1]);
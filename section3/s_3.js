function solution(a) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            answer += a[i];
        }
    }
    answer *= 1;
    console.log(answer);
}

solution('g0en2T0s8eSoft');
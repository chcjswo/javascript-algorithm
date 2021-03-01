function solution(a) {
    let answer = '';

    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) === i) {
            answer += a[i];
        }
    }

    console.log(answer);
}

solution('ksekkset');
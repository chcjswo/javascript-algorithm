function solution(a) {
    let answer = Math.floor(a / 12);
    if (a % 12 !== 0) {
        answer++;
    }
    console.log(answer);
}

solution(25);
solution(178);
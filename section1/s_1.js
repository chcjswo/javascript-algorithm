function solution(a, b, c) {
    let answer;
    if (a < b) {
        answer = a;
    } else {
        answer = b;
    }
    if (c < answer) {
        answer = c;
    }
    console.log(answer);
}

solution(1, 2, 3);
solution(4, 12, 2);
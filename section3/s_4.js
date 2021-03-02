function solution(a, b) {
    let answer = [];
    let p = 1000;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b) {
            p++;
        } else {
            p = 0;
        }
        answer.push(p);
    }
    p = 1000;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] !== b) {
            p++;
        } else {
            p = 0;
        }
        answer[i] = Math.min(p, answer[i]);
    }

    console.log(answer);
}

solution('teachermode', 'e');
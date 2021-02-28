function solution(a, b) {
    let index = 0;
    let max = 0;

    for (let i = 0; i < b.length; i++) {
        if (max < b[i].length) {
            max = b[i].length;
            index = i;
        }
    }

    console.log(b[index]);
}

solution(5, ['teacher', 'time', 'student', 'beautiful', 'goo']);
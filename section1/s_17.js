function solution(a) {
    let answer = a.filter((item, index) => {
        if (a.indexOf(item) === index) {
            return item;
        }
    });

    console.log(answer);
}

solution(['jsgood', 'time', 'good', 'time', 'student']);
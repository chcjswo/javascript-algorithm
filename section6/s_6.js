function solution(n, k) {
    let answer;
    let a = [];
    for (let i = 1; i <= n; i++) {
        a.push(i);
    }

    let i = 1;
    let index = 0;
    while (a.length > 1) {
        index = (k * i ) - 1;
        if (index > a.length) {
            index = a.length - index;
        }
        a.splice(index, 1)
        i++;
    }
    answer = a;

    console.log(answer);
}

solution(8, 3);
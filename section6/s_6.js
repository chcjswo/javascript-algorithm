function solution(n, k) {
    let answer;
    let queue = Array.from({length: n}, (v, i) => i + 1);

    let i = 1;
    while (queue.length > 1) {
        if (i++ === k) {
            i = 0;
        } else {
            const tmp = queue[0];
            queue.splice(0, 1);
            queue[queue.length - 1] = tmp;
        }
    }
    answer = queue.shift();

    console.log(answer);
}

solution(5, 3);
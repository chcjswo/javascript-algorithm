function solution(a, b) {
    let answer = 'YES';
    let queue = a.split('');

    for (const x of b) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) {
                answer = 'NO';
                break;
            }
        }
    }
    if (queue.length > 0) {
        answer = 'NO';
    }

    console.log(answer);
}

solution('CBAF', 'CBDAGE');
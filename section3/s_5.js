function solution(a) {
    let answer = '';
    let count = 0;
    let prev = a[0];

    for (const item of a) {
        if (item === prev) {
            count++;
        } else {
            answer += prev + (count === 1 ? '' : count);
            prev = item;
            count = 1;
        }
    }
    answer += prev + (count === 1 ? '' : count);

    console.log(answer);
}

solution('KKHSSSSSSSE');
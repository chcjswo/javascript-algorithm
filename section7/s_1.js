function solution(n, arr) {
    let answer = arr;

    for (let i = 0; i < n; i++) {
        let index = [i];
        for (let j = i + 1; j < n; j++) {
            if (answer[index] > answer[j]) {
               index = j;
            }
        }
        [answer[i], answer[index]] = [answer[index], answer[i]];
    }

    console.log(answer);
}

solution(8, [13, 5, 11, 7, 23, 15, 9, 12]);
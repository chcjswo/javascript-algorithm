function solution(m, a) {
    let answer = 0;
    let n = a.length;
    a.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
        let money = m - (a[i][0] / 2 + a[i][1]);
        let cnt = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i && (a[j][0] + a[j][1] > money)) {
                break;
            }
            if (j !== i && (a[j][0] + a[j][1] <= money)) {
                money -= (a[j][0] + a[j][1]);
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    console.log(answer);
}

solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
]);
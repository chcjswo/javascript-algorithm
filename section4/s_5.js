function solution(n, k, a) {
    let answer = 0;
    let set = new Set();

    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                set.add(a[i] + a[j] + a[k]);
            }
        }
    }
    let b = Array.from(set).sort((a, b) => b - a);
    answer = b[k - 1];

    console.log(answer);
}

solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
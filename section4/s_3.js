function solution(a) {
    let answer = 0;
    let m = a.length;
    let n = a[0].length;
    let tmp = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0;
                let pj = 0;
                for (let s = 0; s < n; s++) {
                    if (a[k][s] === i) {
                        pi = s;
                    }
                    if (a[k][s] === j) {
                        pj = s;
                    }
                }
                if (pi < pj) {
                    cnt++;
                }
            }
            if (cnt === m) {
                tmp.push([i, j]);
                answer++;
            }
        }
    }

    console.log(tmp);
    console.log(answer);
}

solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
]);
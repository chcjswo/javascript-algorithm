function solution(n, a) {
    let answer;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i];
    }
    answer = sum;

    for (let i = n; i < a.length; i++) {
        sum += (a[i] - a[i - n]);
        answer = Math.max(answer, sum);
    }

    // for (let i = 0; i < a.length; i++) {
    //     for (let j = i + 1; j <= i + 1; j++) {
    //         let max = 0;
    //         for (let k = j + 1; k <= j + 1; k++) {
    //             let sum = a[i] + a[j] + a[k];
    //             if (sum > max) {
    //                 max = sum;
    //             }
    //         }
    //         if (answer < max) {
    //             answer = max;
    //         }
    //     }
    // }

    console.log(answer);
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
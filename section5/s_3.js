function solution(m, a) {
    let answer = 0;
    let left = 0;
    let right = 1;
    let sum = 0;

    while (right < a.length) {
        sum += a[right++];
        if (sum === m) {
            answer++;
        }
        while (sum >= m) {
            sum -= a[left++];
            if (sum === m) {
                answer++;
            }
        }
    }

    // for (let i = 0; i < a.length; i++) {
    //     let sum = a[i];
    //     for (let j = i + 1; j < a.length; j++) {
    //         sum += a[j];
    //         if (sum === m) {
    //             answer++;
    //         }
    //     }
    // }

    console.log(answer);
}

solution(6, [1, 2, 1, 3, 1, 1, 1, 2, 1, 3]);
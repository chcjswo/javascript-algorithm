function solution(a) {
    let answer = [];
    let max = 0;
    let minIndex = 0;

    // for (let i = 0; i < a.length; i++) {
    //     const b = String(a[i]);
    //     let sum = 0;
    //     for (const el of b) {
    //         sum += Number(el);
    //     }
    //     answer.push(sum);
    //     if (max <= sum) {
    //         max = sum;
    //         minIndex = i;
    //         console.log(i);
    //     }
    // }

    for (const x of a) {
        let sum = 0;
        let tmp = x;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) {
                answer = x;
            }
        }
    }

    console.log(answer);
}

solution([128, 460, 603, 40, 521, 137, 123, 128]);
function solution(member, a) {
    let answer = Array.from({length: member}, () => 1);

    // for (let i = 0; i < a.length; i++) {
    //     let rank = 0;
    //     for (let j = 0; j < a.length; j++) {
    //         if (a[i] >= a[j]) {
    //             rank++;
    //         }
    //     }
    //     answer.push(member - rank + 1);
    // }

    for (let i = 0; i < member; i++) {
        for (let j = 0; j < member; j++) {
            if (a[j] > a[i]) {
                answer[i]++;
            }
        }
    }

    console.log(answer);
}

solution(6, [92, 89, 92, 100, 76, 92]);
function solution(a) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        let sum = a[i];
        for (let j = i + 1; j < a.length; j++) {
            sum += a[j];
            if (sum === 6) {
                answer++;
            }
        }
    }

    console.log(answer);
}

solution([1, 2, 1, 3, 1, 1, 1, 2, 1, 3]);
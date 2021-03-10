function solution(m, a) {
    let answer = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < a.length; right++) {
        sum += a[right];
        if (sum <= m) {
            answer += (right - left + 1);
        }
        while (sum > m) {
            sum -= a[left++];
            if (sum <= m) {
                answer += (right - left + 1);
            }
        }
    }


    console.log(answer);
}

solution(5, [1, 3, 1, 2, 3, 1, 1, 1]);
function solution(a) {
    let answer = '';
    const str = a.split('');

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] !== a[j]) {
                answer += a[i];
            }
        }
    }

    console.log(answer);
}

solution('ksekkset');
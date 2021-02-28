function solution(a) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        const char = a.charCodeAt(i);

        if (char >= 65 && char <= 90) {
            answer++;
        }
    }

    console.log(answer);
}

solution('KoreHappyTimeZZ');
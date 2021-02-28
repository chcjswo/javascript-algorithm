function solution(a) {
    let answer = '';

    for (let i = 0; i < a.length; i++) {
        const char = a.charCodeAt(i);

        if (char >= 65 && char <= 90) {
            answer += String.fromCharCode(char + 32);
        } else {
            answer += String.fromCharCode(char - 32);
        }
    }

    console.log(answer);
}

solution('StuDy');
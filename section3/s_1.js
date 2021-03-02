function solution(a) {
    a = a.toLowerCase();
    let answer = 'YES';
    const n = a.length;

    for (let i = 0; i < Math.floor(n/2); i++) {
        if (a[i] !== a[n - 1 - i]) {
            answer = 'NO';
            break;
        }
    }

    console.log(answer);
}

solution("gooG");
solution("goooG");
solution("kayak");
solution("abccba");
solution("abccbaa");
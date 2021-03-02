function solution(a) {
    let answer = 'YES';
    a = a.toLowerCase().replace(/[^a-z]/g, '');
    if (a.split('').reverse().join('') !== a) {
        answer = 'NO';
    }

    console.log(answer);
}

solution("found7, time: study; Yduts; emit, 7Dnuof");
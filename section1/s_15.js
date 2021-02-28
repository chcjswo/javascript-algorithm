function solution(a) {
    let answer = '';
    const str = a.split('');

    if (a.length % 2 === 0) {
        answer = str[Math.floor(a.length/2) - 1];
        answer += str[Math.floor(a.length/2)];

    } else {
        answer = str[Math.floor(a.length/2)];
    }

    console.log(answer);
}

solution('study');
solution('teams');
solution('good');
solution('gooaad');
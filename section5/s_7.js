function solution(a, b) {
    let answer = 'YES';

    const aa = a.split('').sort().join('');
    const bb = b.split('').sort().join('');

    if (aa != bb) {
        answer = 'NO';
    }

    console.log(answer);
}

solution('AbaAeCe', 'baeeACA');
solution('abaCC', 'Caaab');
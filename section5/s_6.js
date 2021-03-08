function solution(a) {
    let answer;
    const map = new Map();

    for (const item of a) {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    }

    let max = 0;
    let code = '';
    for (let key of Object.keys(map)) {
        const value = map[key];
        if (max < value) {
            max = value;
            code = key;
        }
    }
    answer = code;

    console.log(answer);
}

solution('BACBACCACCBDEDEEEEE');
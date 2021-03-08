function solution(a, b) {
    let answer = [];

    for (const itemA of a) {
        answer.push(itemA);
        for (const itemB of b) {
            answer.push(itemB);
        }
    }

    console.log(answer.sort((a, b) => a - b));
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
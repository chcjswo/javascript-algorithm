function solution(a, b) {
    let answer = [];

    for (const itemA of a) {
        for (const itemB of b) {
            if (itemA === itemB) {
                answer.push(itemA);
            }
        }
    }

    console.log(answer.sort((a, b) => a - b));
}

solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
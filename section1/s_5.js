function solution(a) {
    let min = Number.MAX_SAFE_INTEGER;

    for (const item of a) {
        if (item < min) {
            min = item;
        }
    }

    console.log(min);
}

solution([6, 7, 5, 3]);
solution([5, 7, 1, 3, 2, 9, 11]);
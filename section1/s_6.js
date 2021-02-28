function solution(a) {
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let arr = [];

    for (const item of a) {
        if (item % 2 !== 0) {
            sum += item;
            arr.push(item);
        }
    }
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }

    console.log(sum);
    console.log(min);
}

solution([12, 77, 38, 41, 53, 92, 85]);
solution([5, 7, 1, 3, 2, 9, 11]);
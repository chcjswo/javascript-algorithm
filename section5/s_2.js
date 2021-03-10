function solution(a, b) {
    let answer = [];
    a.sort();
    b.sort();
    let n = a.length;
    let m = b.length;
    let p1 = 0;
    let p2 = 0;

    while (p1 < n && p2 < m) {
        if (a[p1] < b[p2]) {
            p1++;
        } else if (a[p1] > b[p2]) {
            p2++;
        } else {
            answer.push(a[p1]);
            p1++;
            p2++;
        }
    }

    // for (const itemA of a) {
    //     for (const itemB of b) {
    //         if (itemA === itemB) {
    //             answer.push(itemA);
    //         }
    //     }
    // }

    console.log(answer);
}

solution([1, 3, 9, 5, 2, 7], [3, 2, 5, 7, 8]);
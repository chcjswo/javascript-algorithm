function solution(board, moves) {
    let answer = 0;
    let  stack = [];

    // let t1 = [];
    // let t2 = [];
    // let t3 = [];
    // let t4 = [];
    // let t5 = [];
    //
    // for (let i = 0; i < board.length; i++) {
    //     for (let j = board.length - 1; j >= 0; j--) {
    //         if (board[j][i] !== 0) {
    //             if (i === 0) {
    //                 t1.push(board[j][i]);
    //             } else if (i === 1) {
    //                 t2.push(board[j][i]);
    //             } else if (i === 2) {
    //                 t3.push(board[j][i]);
    //             } else if (i === 3) {
    //                 t4.push(board[j][i]);
    //             } else if (i === 4) {
    //                 t5.push(board[j][i]);
    //             }
    //         }
    //     }
    // }
    //
    // for (const move of moves) {
    //     let item;
    //     if (move === 1) {
    //         item = t1.pop();
    //     } else if (move === 2) {
    //         item = t2.pop();
    //     } else if (move === 3) {
    //         item = t3.pop();
    //     } else if (move === 4) {
    //         item = t4.pop();
    //     } else if (move === 5) {
    //         item = t5.pop();
    //     }
    //     if (stack.length === 0) {
    //         stack.push(item);
    //     } else {
    //         let pop = stack.pop();
    //         if (pop === item) {
    //             answer+=2;
    //         } else {
    //             stack.push(pop);
    //             stack.push(item);
    //         }
    //     }
    // }

    moves.forEach(pos => {
        for (let i = 0; i < board.length; i++) {
            const item = board[i][pos - 1];
            if (item !== 0) {
                board[i][pos - 1] = 0;
                if (item === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(item);
                }
                break;
            }
        }
    });

    console.log(answer);
}

solution([
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
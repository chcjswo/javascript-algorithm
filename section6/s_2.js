function solution(a) {
    let answer = '';
    let stack = [];

    for (const item of a) {
        stack.push(item);
        if (item === ')') {
            while (true) {
                let pop = stack.pop();
                if (pop === '(') {
                    break;
                }
            }
        }
    }

    answer = stack.join('');

    console.log(answer);
}

solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)F(A(B))');
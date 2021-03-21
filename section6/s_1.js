function solution(a) {
    let answer = 'YES';
    let stack = [];
    let sum = 0;

    for (const item of a) {
        if (item === '(') {
            stack.push(item);
            sum++;
        } else {

            // if (stack.length === 0) {
            //     return 'NO';
            // }
            sum--;
            stack.pop();
        }
    }

    if (sum !== 0) {
        answer = 'NO';
    }

    return answer;
}

console.log(solution('(()(()))(()'));
console.log(solution('(())()'));
console.log(solution('(()()))'));
function solution(a) {
    let answer;
    let stack = [];

    for (const item of a) {
        if (!isNaN(item)) {
            stack.push(item);
        } else {
            let pop1 = Number(stack.pop());
            let pop2 = Number(stack.pop());

            switch (item) {
                case '+':
                    stack.push(pop2 + pop1);
                    break;
                case '*':
                    stack.push(pop2 * pop1);
                    break;
                case '-':
                    stack.push(pop2 - pop1);
                    break;
                case '/':
                    stack.push(pop2 / pop1);
                    break;
            }
        }
    }

    answer = stack.pop();

    console.log(answer);
}

solution('352+*9-3/');
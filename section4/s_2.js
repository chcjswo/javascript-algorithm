function solution(a) {
    let answer = [];

    // for (const item of a) {
    //     const b = String(item);
    //     let str = '';
    //     for (let i = b.length - 1; i >= 0; i--) {
    //         str += b[i];
    //     }
    //     const num = Number(str);
    //     if (isPrime(num)) {
    //         answer.push(num);
    //     }
    // }

    for (let x of a) {
        let result = 0;
        while (x) {
            let t = x % 10;
            result = result * 10 + t;
            x = parseInt(x / 10);
        }
        if (isPrime(result)) {
            answer.push(result);
        }
    }

    console.log(answer);
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    let divisor = 2;
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
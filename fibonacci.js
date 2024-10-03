
const fibonacci = (len) => {
    let result = [0, 1];
    while (result.length < len) {
        result.push(result[result.length - 2] + result[result.length - 1])
    }
    return result;
}

const fibonacci2 = (len) => {
    if(len < 2){
        return len;
    }
    return fibonacci2(len-1)+fibonacci2(len-2)
}
console.log(fibonacci(6));
console.log(fibonacci2(5));

//memo


const fibonacciMemo = (len, memo={}) => {
    if(memo[len]){
        return memo[len]
    }
    if(len < 2){
        return len;
    }
    memo[len] = fibonacciMemo(len - 2, memo) + fibonacciMemo(len - 1, memo);
    return memo[len];
}

const fibonacciMemoUse = (len) => {
    const result = [];
    for(let i=0; i< len; i++){
        result.push(fibonacciMemo(i))
    }
    return result;
}

console.log("memo", fibonacciMemoUse(5))

const a = [1];
const b = JSON.parse(JSON.stringify(a));

console.log("eqauls", a == b)
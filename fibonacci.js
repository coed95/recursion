function fibonacci(n) {
    if (n === 0) {
        return [0];
    }
  
    if (n === 1) {
        return [0, 1];
    }

    const result = [0, 1];
    
    for (let i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    
    return result;
}

function fibonacciRecursive(n) {
    if (n === 0) {
        return [0];
    }
  
    if (n === 1) {
        return [0, 1];
    }

    function fibonacciHelper(n, memo = {}) {
        if (n in memo) {
            return memo[n];
        }

        if (n <= 0) {
            return 0;
        }

        if (n === 1) {
            return 1;
        }

        memo[n] = fibonacciHelper(n - 1, memo) + fibonacci(n - 2, memo);

        return memo[n];
    }

    const result = [];

    for (let i = 0; i <= n; i++) {
        result.push(fibonacciHelper(i));
    }

    return result;
}
function euler002(n) {
    var fibonacciNumbers = [1, 2];
    var sum = fibonacciNumbers[1];
    var i = 2;

    while (fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2] <= n) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];

        if (fibonacciNumbers[i] % 2 === 0) {
            sum = sum + fibonacciNumbers[i];
        }

        i++;
    }
    
    console.log(sum);
    
    return;
  }
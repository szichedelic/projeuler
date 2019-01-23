function euler006(n) {
    var sumOfSquares = 0;
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sumOfSquares = sumOfSquares + i**2;
        sum = sum + i;
    }

    console.log(sum**2 - sumOfSquares);

    return;
  }
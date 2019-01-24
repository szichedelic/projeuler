function euler007(n) {
    var listOfPrimes = [2, 3];

    for (var i = 2; i <= n; i++) {
        var j = listOfPrimes[i - 1] + 2;

        while(!isPrime(j)) {
            j = j + 2;
        }

        listOfPrimes[i] = j;
    }

    print(listOfPrimes[n - 1]);
    return;
}

function isPrime(num) {
    var output = true;
    
    if (num % 2 === 0) {
        output = false;
    }
    
    for (var i = 3; i <= Math.sqrt(num); i = i + 2) {
        if (num % i === 0) {
            output = false;
            break;
      }
    }
    
    return output;
}

euler007(10001)
function euler010(n) {
    var listOfPrimes = [2, 3];
    var i = 1;

    while(listOfPrimes[i] < n) {
        var j = listOfPrimes[i] + 2;

        while(!isPrime(j)) {
            j = j + 2;
        }
    
        i++;
        listOfPrimes[i] = j;
    }

    listOfPrimes.pop();

    var sum = listOfPrimes.reduce((a, b) => a + b, 0);
    print(sum)
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

euler010(2000000)
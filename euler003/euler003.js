function euler003(n) {
    var max = 0;

    while (n % 2 === 0) {
        n = n/2;
        max = 2;
    }

    for (var i = 3; i <= Math.pow(n,0.5); i = i + 2) {
        while (n % i === 0) {
            if (i > max) {
                max = i;
            }

            n = n/i;
        }
    }

    if (n > max) {
        max = n;
    }
    
    console.log(max);

    return;
  }
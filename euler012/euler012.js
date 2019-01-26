
function euler012() {
    var i = 1;
    var triangularNumber;
    var numDivisors = 0;
    while (numDivisors < 500) {
        triangularNumber = generateTriangularNumber(i);
        numDivisors = getNumDivisors(triangularNumber);
        i++;
    }

    print(triangularNumber);

    return;
}

function generateTriangularNumber(n) {
    var nthTriangularNumber = 0;

    for (var i = 1; i <= n; i++) {
        nthTriangularNumber = nthTriangularNumber + i;
    }

    return nthTriangularNumber;
}

function getNumDivisors(n) {
    var numDivisors = 0;

    for (var i = 1; i <= Math.pow(n,0.5); i++) {
        if (n % i === 0) {
            numDivisors = numDivisors + 2;
        }
    }

    return numDivisors;
}

euler012()
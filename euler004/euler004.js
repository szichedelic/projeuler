function euler004() {
    var prod;
	var maxPalindrome = 0;

    for (var i = 1; i < 1000; i++) {
        for (var j = 1; j < 1000; j++) {
            prod = i * j;
            revProd = prod.toFixed(0).split('').reverse().join('') - 0;

            if (prod == revProd && parseInt(prod) > maxPalindrome) {
                maxPalindrome = prod;
            }
        }
    }
    
    console.log(maxPalindrome)

    return;
  }
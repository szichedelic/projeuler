function euler001() {
    var sum = 0;
    
    for (var n=999; n > 0; n--) {
        if (n % 3 === 0 || n % 5 === 0) {
            sum = sum + n;
        }
    }
    
    console.log(sum);
    
    return;
  }
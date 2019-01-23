function euler005(n) {
    var numberFound = false;
    var currentN = n;
    var sum;
    
    while (sum != n) {
        sum = 0;
      
      for (var i = 1; i <= n; i++) {
        if (currentN % i === 0) {
          sum = sum + 1;
        }
      }
      
      currentN++;
    }
  
  
  
      console.log(currentN - 1);
    
    return;
  }
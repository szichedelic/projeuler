function euler009() {
    var a, b, c, prod;
    var u = 1;
    var v = 1;

    while(prod == null) {
        v = (500 - u*u)/u;

        if (Number.isInteger(v)){
            a = u*u - v*v;
            b = 2*u*v;
            c = u*u + v*v;

            if (a > 0 && b > 0 && c > 0) {
                prod = a * b * c;
            }
        }
        u++;
    }

    print(prod);
    
    return;    
}

euler009()
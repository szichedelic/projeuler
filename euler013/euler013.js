function euler013() {
    var numbers = readFile('./numbers.txt').split(" ");
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i].replace(/ /g, ''));
        sum = sum + numbers[i];
    }

    print(sum)
}

euler013()
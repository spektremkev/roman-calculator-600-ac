function calculate(acc, number, op) {
    var result = 0;



    if (acc == '' ) {
        console.log(acc,number,op,result);
        return number;
    }
    if (op == '+') {
        result = acc + number;
    }
    if (op == '−') {
        result = acc - number;
    }
    if (op == '×') {
        if (number == '') return '';
        result = Math.round(acc * number);
    }
    if (op == '÷') {
        if (number < 1) return 0;
        result = Math.round(acc / number);
    }
    
    console.log(acc,number,op,result);
    return result;
}
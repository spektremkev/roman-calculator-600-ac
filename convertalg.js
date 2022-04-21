function convertAlg(num) {
    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = []


    nums.forEach(function (value) {
        while (num >= value) {
            num -= value;
            switch (value) {
                case 1000:
                    result.push('M');
                    break;
                case 900:
                    result.push('CM');
                    break;
                case 500:
                    result.push('D');
                    break;
                case 400:
                    result.push('CD');
                    break;
                case 100:
                    result.push('C');
                    break;
                case 90:
                    result.push('XC');
                    break;
                case 50:
                    result.push('L');
                    break;
                case 40:
                    result.push('XL');
                    break;
                case 10:
                    result.push('X');
                    break;
                case 9:
                    result.push('IX');
                    break;
                case 5:
                    result.push('V');
                    break;
                case 4:
                    result.push('IV');
                    break;
                case 1:
                    result.push('I');
                    break;
            }
        }
    });

    if (result.length == 0) {
        console.log('nulla');
        return ['nulla'];
    }

    if(result.length > 19){
        return ['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'];
    }
   
    console.log(result);
    return result;
}
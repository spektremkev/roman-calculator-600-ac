//roman numerals map
var romanNumerals;
/*
letter.set(1, 'I');
letter.set(2, 'II');
letter.set(3, 'III');
letter.set(4, 'IV');
letter.set(5, 'V');
letter.set(10, 'X');
letter.set(50, 'L');
letter.set(100, 'C');
letter.set(500, 'D');
letter.set(1000, 'M');
*/

//function to convert number to roman numerals
function convertnum(num) {
    var roman = '';
    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < nums.length; i++) {
        while (num >= nums[i]) {
            roman += romans[i];
            num -= nums[i];
        }
    }
    return romanNumerals;
}
   
// create function calculate

function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    if (operator === '-') {
        return num1 - num2;
    }
    if (operator === '*') {
        return num1 * num2;
    }
    if (operator === '/') {
        return num1 / num2;
    };

}



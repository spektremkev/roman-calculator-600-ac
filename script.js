
var input = [];
var inputnum = '';
var resultalg = '';
var result = '';
var lastope = '';
var context = false;

function enterValue(value, type) {
    console.log(value);
    console.log(type);

    if (type == 'num') {
        context = true;
        input.push(value);
        return (document.getElementById("value").innerHTML = input.join(''));
    }
    if (type == 'op') {
        if (context == false) return (document.getElementById("value").innerHTML = lastope);
        inputnum = window.convertNum(input);
        result = window.calculate(result, inputnum, lastope);
        lastope = value;
        resultalg = window.convertAlg(result);
        input = [];       
        context = false;
        return (document.getElementById("value").innerHTML = value);
        //return (document.getElementById("value").innerHTML = resultalg.join(''));
    }
    if (type == 'cl') {
        input.pop();
        context = true;
        return (document.getElementById("value").innerHTML = input.join(''));
    }
    if (type == 'ope') {
        if (context == false) return;

        if (input.length == 0){
            console.log("dentro",input);
            if (result != ' '){
                return (document.getElementById("value").innerHTML = result > 0 ? convertAlg(result).join(''):"");
            }
            else{
                return ; 
            }
        }
    
        console.log(input);
        inputnum = window.convertNum(input);
        result = window.calculate(result, inputnum, lastope);
        input = window.convertAlg(result);
        document.getElementById("value").innerHTML = input.join('');
        input = [];
        inputnum = '';
        resultalg = '';
        result = '';
        lastope = '';
        context = false; 
    }


}







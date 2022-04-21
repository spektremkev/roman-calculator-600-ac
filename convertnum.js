
//Função recebe um array e transforma em um número.
function convertNum(arr) {
    var new_arr = []; //array para armazenar os valores do algoritimos

     

    //função fazendo a conversão de 1 algarismo para numéro.
    arr.forEach(function (letra) {
        switch (letra) {
            case 'M':
                new_arr.push(1000);
                break;
            case 'D':
                new_arr.push(500);
                break;
            case 'C':
                new_arr.push(100);
                break;
            case 'L':
                new_arr.push(50);
                break;
            case 'X':
                new_arr.push(10);
                break;
            case 'V':
                new_arr.push(5);
                break;
            case 'I':
                new_arr.push(1);
                break;
        }
    });


    //variáveis para idenificar a precedência de um algarismo e para soma dos valores dos algarismos.
    var higher_num = 1;
    var result = 0;

    //O for é usado para verificar se um algarismo menor está precedendo um algarismo de valor maior, caso esse seja o caso ele está.
    for (var i = new_arr.length - 1; i >= 0; i--) { //O for está em reverso, porque o assim o próximo algarismo sempre é maior.
        if (new_arr[i] >= higher_num) {
            higher_num = new_arr[i];
            result += new_arr[i];
        }
        else {
            higher_num = new_arr[i];
            result += new_arr[i] * -1;
        }
    }


    console.log(result);
    return result;
}

//Usei como base esse conversor 'https://www.todamateria.com.br/numeros-romanos/'.

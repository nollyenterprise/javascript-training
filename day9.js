let eqn = "34 - 1x = 46";

function MissingDigit (str) {

    // 1. Get all operators 
    let operator = ['+', '-', '*', '/'];
    // console.log(operator);

    // 2. Get my equal sign 
    let equal = "=";
    // console.log(equal);

    // 3. Split Question and Answer 
    let exp = str.split(equal);
    // console.log(exp);

    // 4. Get Answer only 
    let answer = exp[1].trim();
    // console.log(answer);

    // 5. Get Equation only
    let equation = exp[0].trim();
    // console.log(equation);

    // 6. Get equation variables 
    let calFn = operator.filter((v)=>equation.includes(v))[0];
    let var1 = equation.split(calFn)[0].trim();
    let var2 = equation.split(calFn)[1].trim();
    // console.log(calFn);
    // console.log(var1);
    // console.log(var2);

    let fA = '';
    for (const i in operator) {
        switch (operator[i]) {
            case calFn:
                if(calFn == '+'){
                    if(answer.includes('x')){
                        fA = parseFloat(var1) + parseFloat(var2);
                    } else if (var1.includes('x')) {
                        fA = parseFloat(answer) - parseFloat(var2);
                    } else {
                        fA = parseFloat(answer) - parseFloat(var1);
                    }
                } else if(calFn == '-'){
                    if(answer.includes('x')){
                        fA = parseFloat(var1) - parseFloat(var2);
                    } else if (var1.includes('x')) {
                        fA = parseFloat(answer) + parseFloat(var2);
                    } else {
                        fA = parseFloat(answer) - parseFloat(var1);
                    }
                } else if(calFn == '*'){
                    if(answer.includes('x')){
                        fA = parseFloat(var1) * parseFloat(var2);
                    } else if (var1.includes('x')) {
                        fA = parseFloat(answer) / parseFloat(var2);
                    } else {
                        fA = parseFloat(answer) / parseFloat(var1);
                    }
                } else if(calFn == '/'){
                    if(answer.includes('x')){
                        fA = parseFloat(var1) / parseFloat(var2);
                    } else if (var1.includes('x')) {
                        fA = parseFloat(answer) * parseFloat(var2);
                    } else {
                        fA = parseFloat(answer) / parseFloat(var1);
                    }
                }
                if(answer.includes('x')){
                    str = answer.length == 1 ? fA : fA.toString()[answer.indexOf('x')];
                } else if (var1.includes('x')) {
                    str = var1.length == 1 ? fA : fA.toString()[var1.indexOf('x')];
                } else {
                    str = var2.length == 1 ? fA : fA.toString()[var2.indexOf('x')];
                }
            break;
        }
    }

    return str;

}

let res = MissingDigit(eqn);
console.log("Answer is ", res);
const inputFirstElement = document.getElementById("inputFirst");
const inputSecondElement = document.getElementById("inputSecond");
const operationElement = document.getElementById("operation");
const outputResultElement = document.getElementById("outputResult");

function calculate(){
    let firstOperand = parseFloat(inputFirstElement.value);
    let secondOperand = parseFloat(inputSecondElement.value);
    let result;
    switch (operationElement.value) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
           result = firstOperand - secondOperand;
           break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            console.error("Забыл добавить функцию.");
            break;
    }
    outputResultElement.value = +result.toFixed(10);
}
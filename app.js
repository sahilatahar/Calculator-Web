
let operator = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let history = "";
let calculationText = '';


var textId = document.getElementById('calculationtext');
var historyId = document.getElementById('calculationHistory');

function aconclick() {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    history = '';
    calculationText = '';
    textId.textContent = calculationText;
    historyId.textContent = history;
}

function eraseonclick() {
    if (calculationText !== '') {
        calculationText = calculationText
            .substring(0, calculationText.length - 1);
        history = history.substring(0, history.length - 1);
        textId.textContent = calculationText;
        historyId.textContent = history;
    }
}

function percentonclick() {
    try {
        firstNumber =
            Number(calculationText.split(operator)[0]);
        secondNumber =
            Number(calculationText.split(operator)[1]);

        if (isNaN(secondNumber)) {
            result = firstNumber.toString();
        } else {
            result = firstNumber * (secondNumber / 100);
        }
        calculationText = result.toString();
        textId.textContent = calculationText;
        historyId.textContent = history;
    } catch (e) { }
    checkAndInsertOperator("%");
}

function equalonclick() {
    try {
        firstNumber =
            Number(calculationText.split(operator)[0]);
        secondNumber =
            Number(calculationText.split(operator)[1]);
        displayResult();
        operator += "=";
        history += "=";
        history += result.toString();
    } catch (e) { }
}

function numberonclick(number) {
    calculationText += number;
    history += number;
    textId.textContent = calculationText;
    historyId.textContent = history;
}

function operatoronclick(oprtr) {
    try {
        firstNumber =
            Number(calculationText.split(operator)[0]);
        secondNumber =
            Number(calculationText.split(operator)[1]);
        displayResult();
    } catch (e) { }
    checkAndInsertOperator(oprtr);
}

function checkAndInsertOperator(opertr) {
    for (let i = 0; i <= 9; i++) {
        if (calculationText.endsWith(i.toString())) {
            calculationText += opertr;
            operator = opertr;
            history += operator;
            textId.textContent = calculationText;
            historyId.textContent = history;
            return;
        }
    }

    calculationText = calculationText.substring(0, calculationText.length - 1);
    calculationText += operator;
    history = history.substring(0, history.length - 1);
    history += operator;
    textId.textContent = calculationText;
    historyId.textContent = history;
}

function displayResult() {
    if (isNaN(secondNumber)) {
        result = firstNumber.toString();
    } else {
        if (operator === "%") {
            result = firstNumber * secondNumber / 100;
        } else if (operator === '/') {
            result = firstNumber / secondNumber;
        } else if (operator === 'x') {
            result = firstNumber * secondNumber;
        } else if (operator === '-') {
            result = firstNumber - secondNumber;
        } else if (operator === '+') {
            result = firstNumber + secondNumber;
        }
    }
    calculationText = result.toString();
    textId.textContent = calculationText;
    historyId.textContent = history;
}

function changeMode() {
    var btnId = document.getElementById("mode");
    if (btnId.textContent !== 'Dark Mode') {
        document.getElementById("main").style.backgroundColor = "#ecf0f1";
        btnId.textContent = "Dark Mode";
    } else {
        document.getElementById("main").style.backgroundColor = "#434243";
        btnId.textContent = "Light Mode";
    }
}
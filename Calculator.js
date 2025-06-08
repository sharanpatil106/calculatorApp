let currentInput = ''
let currentOperration = ''
function appendNumber(number){
     currentInput += number
     document.getElementById('display').value = currentInput
}

function clearDisplay(){
    currentInput = ''
    currentOperration = ''
    document.getElementById('display').value = ''
}

function setOperation(operator){
    if(currentInput === ''){
        return;
    }
    if(currentOperration !== ''){
        calculate()
    }
    currentOperration = operator
    currentInput += operator
    document.getElementById('display').value = currentInput
}
function calculate(){
    try{
        currentInput = eval(currentInput).toString()
        document.getElementById('display').value=currentInput
        currentOperration =''
    }catch(e){
        document.getElementById('display'),value = 'ERROR !'
        currentInput = ''
    }   
}
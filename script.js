let result = document.getElementById("Result")
function calculate(operator){
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)
    if(operator==="+"){
        result.innerHTML = `${num1+num2}`
    }
    if(operator==="-"){
        result.innerHTML = `${num1-num2}`
    }
    if(operator==="*"){
        result.innerHTML = `${num1*num2}`
    }
    if(operator==="/"){
        result.innerHTML = `${num1/num2}`
    }
}
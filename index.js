"use strict";

const userInput = require("prompt-sync")
const prompt = userInput()
const sqrt = Math.sqrt

app()

function app() {

    let func = prompt("f(x)= ").replace('\^', '**')

    input()

    function input() {

    let x = prompt("Digite o extremo inferior do intervalo: ") 
    
    let fA = x
    
        if (fA == Infinity || NaN) {
            console.log("O extremo " + fA + " não pertence ao domínio da função.")
            input()
            return;
        }
    
    var result = eval(func) 
    
    if (result == result) {
    
        let fB = prompt("Digite o extremo superior do intervalo: ")
        x = fB
        var resultHandler = eval(func)
        var averageChangeRate = (resultHandler - result) / (x - fA)
    }
    
    if (x == Infinity || NaN) {
        console.log("O extremo " + x + " não pertence ao domínio da função.")
        input()
        return;   
    }
    
    if (fA > x) {
        console.log("O extremo inferior não pode ser maior que o extremo superior.")
        input()
        return;
    }
    
    console.log("A taxa média de variação da função: " + func + " no intervalo: " +  "[" + fA + " , " + x + "]" + " é: " + averageChangeRate)
    
    // Debugging 
    // console.log("Ferramentas de debugging")
    // console.log(func)
    // console.log(x)
    // console.log(fA)
    // console.log(result)
    // console.log(resultHandler)
    // console.log(averageChangeRate)
    }
}
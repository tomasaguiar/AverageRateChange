"use strict";

const userInput = require("prompt-sync")
const prompt = userInput()

let func = prompt("f(x)= ").replace('\^', '**')

let x = prompt("Digite o primeiro valor do intervalo: ") 

var valueHandler = x

var result = eval(func)

if (result == result) {

    let x = prompt("Digite o segundo valor do intervalo: ")
    var resultHandler = eval(func)
    var averageChangeRate = (resultHandler - result) / (x - valueHandler)
}

console.log("A taxa média de variação da função: " + func + " é: " + averageChangeRate)

// Debugging 

console.log("Ferramentas de debugging")
console.log(func)
console.log(x)
console.log(valueHandler)
console.log(result)
console.log(resultHandler)
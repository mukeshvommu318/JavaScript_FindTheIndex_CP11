let numbers = [17, 31, 77, 20, 63];

let paraElement = document.getElementById("arrip")
paraElement.textContent="["+numbers.join(", ")+"]"

let inputElement = document.getElementById("inputId")
let btnElement = document.getElementById("btnId")
let paraOpElement = document.getElementById("arrop")

btnElement.onclick=function(){
    let inputValue = parseInt(inputElement.value)
    let index = numbers.indexOf(inputValue)
    paraOpElement.textContent=index

}
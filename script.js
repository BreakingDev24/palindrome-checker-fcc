// varibles

const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

let userInput = ""
let reverseInput = ""
let isPalindrome;

function getUserInput () {
    if(textInput.value == ""){
        alert('write something')
    } else {
        userInput = textInput.value
        textInput.value = ""
        console.log(userInput)
    }
    reverseUserInput()
    checkPalindrome()
    renderResult()
}


function reverseUserInput (){
    
    reverseInput = userInput.split("").reverse().join("").replace(/[^0-9a-z]/gi, '')//reverse and remove not alphanumeric charcters
}

function checkPalindrome(){
    if(userInput.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase() == reverseInput.toLocaleLowerCase()) {
        isPalindrome = true
    } else {
        isPalindrome = false
    }
    console.log(isPalindrome);

}

function renderResult (){
    if(isPalindrome === true){
        result.textContent = userInput + " is a palindrome"
    } else {
        result.textContent = userInput + " is not a palindrome"

    }
}

console.log('ciao' == "cane")

checkBtn.addEventListener("click", getUserInput)
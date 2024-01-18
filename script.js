// varibles

const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

let userInput = ""

function getUserInput () {
    if(textInput.value == ""){
        alert('write something')
    } else {
        userInput = textInput.value
        textInput.value = ""
        console.log(userInput)
    }
    reverseUserInput()
    renderResult(userInput)
}


function reverseUserInput (){
    
    let reverseInput = userInput.split("").reverse().join("").replace(/[^0-9a-z]/gi, '')//reverse and remove not alphanumeric charcters
    console.log(reverseInput);
}


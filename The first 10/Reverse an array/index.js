// Variables
    let numberArray = [3, 1, 6, 4, 9]

// Elements from HTML
const numberEl = document.getElementById("number-el")
const highLow = document.getElementById("high-low")
const lowHigh = document.getElementById("low-high")
const reverse = document.getElementById("reverse") 
const answerEl = document.getElementById("answer-el")

// Buttons
const addNum = document.getElementById("add-num")
const runBtn = document.getElementById("run")


// Event Listeners
addNum.addEventListener("click", function(){
    numberArray.push(numberEl.value)
    console.log(numberArray);
})


runBtn.addEventListener("click", function(){
    if (highLow.checked){
        highToLow()
    } else if (lowHigh.checked){
        lowToHigh()
    } else if (reverse.checked){
        reverseArray()
    }
})

// --------------- FUNCTIONS ---------------





function reverseArray(){
    numberArray.reverse()
    printArray()
}

function lowToHigh(){
    numberArray.sort(function(a, b){ return a - b})
    printArray()
}

function highToLow(){
    numberArray.sort(function(a, b){ return b - a})
    printArray()
}

function printArray(){
    answerEl.innerText = numberArray
}


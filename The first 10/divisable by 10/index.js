
// Variables
    let testNumber = ""

// Elements from HTML
    const numberEl = document.getElementById("number-el")
    const outputEl = document.getElementById("output-el")

// Buttons
    const run = document.getElementById("run")

// Event Listeners
    run.addEventListener("click", function(){
        testNumber = numberEl.value
        isItDivisable()
    })

// ---------------FUNCTIONS--------------------

// This functions check the remander when dividing by 10 and sets the result to HTML
function isItDivisable() {
    if (testNumber % 10 === 0){
        outputEl.innerText = "Yup"
    } else {
        outputEl.innerText = "Nope"
    }
}



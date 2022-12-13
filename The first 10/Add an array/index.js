// Variables
    let numberArray = []

// Elements from HTML
    const answerEl = document.getElementById("answer-el")
    const numberEl = document.getElementById("number-el")
    const listOfNums = document.getElementById("list-of-nums")

// Buttons
    const addNumberBtn = document.getElementById("add-number-btn")
    const runBtn = document.getElementById("run")

// EVENT LISTENERS WITH FUNCTIONS INSIDE

    // This function:
        // Takes the number from the input and changes it from string to number
        // Puts that number in the array
        // Prints the list of number to HTML
        // Tells the user that they must input a number
        // Resets the input text
addNumberBtn.addEventListener("click", function(){
    if (numberEl.value){
        // you have to parse the input to change it from string to number   
            // .parseFloat for decimals
            // .parseInt for whole numbers
            let newNumber = parseFloat(numberEl.value)
        // then this works
            numberArray.push(newNumber)
            listOfNums.innerText = numberArray
        }
    else {
        listOfNums.innerText = "Please input number"
    }  
    numberEl.value = ""
})

    // This Function:
        // Uses reduce to add the array.
        // .reduce takes the current number (weather the inital[0] <or x> of array or the added number)
        // and adds it to the nuxt number in the array. The 0 at the end tells is where
        // to start. Also prints to HTML
runBtn.addEventListener("click", function(){
    let sum = numberArray.reduce((x, y) => {
        return x + y}, 0)
    answerEl.innerText = sum
    })









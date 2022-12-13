// List of variables
    let numberArray = []

// List of elements
    const numberEl = document.getElementById("number-el")
    const highLow = document.getElementById("high-low")
    const lowHigh = document.getElementById("low-high")

// List of buttons
    const run = document.getElementById("run")
    const addNumberBtn = document.getElementById("add-number-btn")


// List of HTML elements that will be changed
    const result = document.getElementById("result")

// Event Listeners
    addNumberBtn.addEventListener("click", function(){
        addNumber()
    })

    run.addEventListener("click", function(){
        sortFunction()
    })

//---------------FUNCTIONS---------------

// This puts inputted numbers into array and clears the HTML input
    function addNumber(){
        numberArray.push(numberEl.value)
        numberEl.value = ""
        console.log(numberArray)
    }

// Sorts the numbers in the array
    function sortFunction(){
       
       // Just need to conect the radio selector
    //    if (highLow.checked){
    //         numberArray.sort(function(a, b){
    //             result.innerText = numberArray
    //     })}
    //     else if (lowHigh.checked){
    //         numberArray.sort(function(b, a){
    //             result.innerText = numberArray
    //     })}
    if (highLow.checked){
        numberArray.sort(function(a,b){
            return b - a
        })
    }
    else if (lowHigh.checked){
        numberArray.sort(function(a, b){
            return a - b
        })
    }
        printList()
    }

// Shows the array in <p>
    function printList(){
        result.innerText = numberArray
        numberArray.length = 0
    }



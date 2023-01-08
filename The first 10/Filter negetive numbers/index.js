// Elements from HTML

    const numberInput = document.getElementById("number-input")
    const outputEl = document.getElementById("output-el")
    const arrayList = document.getElementById("array-list")
    
// Buttons
    
    const run = document.getElementById("run")
    const addNumber = document.getElementById("add-number")

// Variables

    let numberArray = []
    let positiveArray = []

// Event listeners

    addNumber.addEventListener("click", function(){
        numberArray.push(numberInput.value)
        arrayList.innerHTML = `${numberArray}`
        filterNegative()
    })
    
    run.addEventListener("click", function(){
        console.log(positiveArray)
        printsPositiveNumbers()
        
    })
    
    
// Functions
    
    
    function filterNegative(){
        if (numberInput.value >= 0){
            positiveArray.push(numberInput.value)
        }
        numberInput.value = ""
        
        
    }

    function printsPositiveNumbers(){
        outputEl.innerHTML = `${positiveArray}`
    }
    
    









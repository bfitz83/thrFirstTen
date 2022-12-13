// Variables
    let listOfNumbers = []
    let lowNum = ""
    let highNum = ""

// Elements from HTML
    const tableEl = document.getElementById("table-el")
    let lowestNumber= document.getElementById("lowest-number")
    let highestNumber = document.getElementById("highest-number")

// Buttons
    const runBtn = document.getElementById("run")

// Event Listeners
    runBtn.addEventListener("click", function(){
        lowNum = lowestNumber.value
        highNum = highestNumber.value
        makeListOfNumbers(lowNum, highNum)   
    })

//---------------------FUNCTIONS ------------------------

// This makes the range of number to be multiplied
    function makeListOfNumbers(lowNum, highNum){
        for (let x = lowNum; x <= highNum; x++)
        listOfNumbers.push(x)
        makeTableHead()
    }

// This makes the table
    function makeTableHead(){
        for (let j = lowNum; j <= highNum; j++){
            let newRow = tableEl.insertRow(-1)  // -1 inverst the collums. 0 will make the table backwords
                for (let x = lowNum; x <= highNum; x++){
                    let cell1 = newRow.insertCell(0)
                    cell1.innerHTML = x * j
            }
        }
        clearVariables()
    }

// This resets the variables 

    function clearVariables(){



        listOfNumbers.length = 0
        lowNum = ""
        highNum = ""
        lowestNumber.value = ""
        highestNumber.value = ""
    }
    
    




  



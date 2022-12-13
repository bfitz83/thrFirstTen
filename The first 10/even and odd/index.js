
//Bassic variables
    let numbersArray = []
    let oddNumbers = []
    let evenNumbers = []
    let smallNumber = ""
    let largeNumber = ""

// Buttons
    const btn = document.getElementById("run")

//Input elements
    const lowNum = document.getElementById("low-num")
    const highNum = document.getElementById("high-num")

// Display elements
    const allNumDis = document.getElementById("all-num-dis")
    const evenNumDis = document.getElementById("even-num-dis")
    const oddNumDis = document.getElementById("odd-num-dis")

// Event listeners
    btn.addEventListener("click", function(){
        smallNumber = lowNum.value
        largeNumber = highNum.value
        listOfNumbers(smallNumber, largeNumber)
    })

// FUNCTIONS -------------

// Creates the inital array of all numbers between two different numbers

    function listOfNumbers(smallNumber, largeNumber){
        for (let x = smallNumber; x <= largeNumber; x++){
            numbersArray.push(x)
        }
        console.log(numbersArray)
        findEvenNumbers()
    }

// So...
    // We cycle through the numbersArray with filter.
    // Take each number and dived by 2
    // If the remander is 0, then it's even. 
    // The % means what is the remander when divided.
    // Find even number is written long form, find odd is shorthand
    // != means does not equal

    function findEvenNumbers(){
        let result = numbersArray.filter(function(n){
            if (n % 2 == 0){
                evenNumbers.push(n)
            }
            else {
                oddNumbers.push(n)
            }
            
        })
        console.log(evenNumbers)
        console.log(oddNumbers)
        printNumbers()
    }

// This just puts all the numbers into html doc

    function printNumbers() {
        allNumDis.innerText = numbersArray
        evenNumDis.innerText = evenNumbers
        oddNumDis.innerText = oddNumbers
        clearNumbers()
    }

// Resets the arrays and strings

    function clearNumbers() {
        lowNum.value = ""
        highNum.value = ""
        smallNumber = ""
        largeNumber = ""
        numbersArray.length = 0
        oddNumbers.length = 0
        evenNumbers.length = 0
    }
    



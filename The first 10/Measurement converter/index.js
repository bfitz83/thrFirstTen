// Variables
let initialNumber = ""
let conversionResult = ""
let displayInfo = [
    "miles", // 0
    "kilometers", // 1
    "gallons", //2
    "liters", //3
    "pounds", //4
    "kilograms", //5

    // add these but need to do math with fractions

    "feet", // 6
    "meters" // 7
]

// Elements from HTML 
const numberEl = document.getElementById("number-el")
const milesKilo = document.getElementById("miles-kilo")
const gallonsLiter = document.getElementById("gallons-liter")
const poundKilo = document.getElementById("pound-kilo")
const conversionDisplay = document.getElementById("conversion-display")



// Buttons
const run = document.getElementById("run")


// Event Listeners
run.addEventListener("click", function(){
    initialNumber = numberEl.value
    
    if (milesKilo.checked){
        conversion(initialNumber, 1.609)
        printResult(displayInfo[0], displayInfo[1])
    }
    else if (gallonsLiter.checked) {
        conversion(initialNumber, 3.785);
        printResult(displayInfo[2], displayInfo[3])
    }
    else if (poundKilo.checked){
        conversion(initialNumber, 2.205)
        printResult(displayInfo[3], displayInfo[4])
    }
    else {
        conversionDisplay.innerText = "Please input a number"
    }
    numberEl.value = ""
})

// --------------- FUNCTIONS ---------------

function conversion(a, b){
    conversionResult = a * b
}

function printResult(x, y){
    conversionDisplay.innerHTML = `${initialNumber} ${x} = ${conversionResult} ${y}`
}
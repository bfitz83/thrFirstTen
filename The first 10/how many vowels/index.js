//Elements from HTML

    const words = document.getElementById("wordString")
    const outputEl = document.getElementById("output-el")

//Variables

    let wordString = ""
    let numOfVowels = ""

//Buttons

    const run = document.getElementById("run")


//Event listeners

    //This event listener is contected to the Run button. it finds the 
    // number of vowels in a given sentence inputed into the "wordstring" 
    // HTML element.
    // I seperated the words and wordString variables so that the inpute from words
    // could be changed and stored in the wordString variable.

        run.addEventListener("click", function(){
            wordString = words.value
            numOfVowels = wordString.replace(/[^aeiou]/gi, "").length
            number()
        })

//Functions

    //This funtion replaces the empty <p> in the HTML with the value 
    // of the numOfVowels

        function number(){
            if (numOfVowels >= 1){
                outputEl.innerHTML = `There are ${numOfVowels} vowels`
            }
            else if (numOfVowels === 1){
                outputEl.innerHTML = `There is ${numOfVowels} vowel`
            }
            else if (numOfVowels === 0) {
                outputEl.innerHTML = `There are no vowels`
            }
        }

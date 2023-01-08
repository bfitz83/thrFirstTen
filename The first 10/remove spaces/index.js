// Elements for HTML

    const inputEl = document.getElementById("input-el")
    const outputEl = document.getElementById("output-el")

// Buttons

    const run = document.getElementById("run")

// Variables

    let wordString = ""
    let noSpcStr = ""

// Event listeners

    // This one takes the input and removes spaces

        run.addEventListener("click", function(){
            wordString = inputEl.value
            console.log(wordString);
            noSpcStr = wordString.replace(/\s+/g, '');
            filterSpaces()

        })

// Functions

        // This one replaces the empty <p> in HTML with the noSpcStr

        function filterSpaces(x){
        outputEl.innerHTML = `${noSpcStr}`
        }

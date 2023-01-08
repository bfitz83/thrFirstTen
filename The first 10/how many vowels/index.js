function numberOfVowels(){
    let numOfVowels = wordString.replace(/[^aeiou]/gi, "").length
    console.log(numOfVowels);
}


// you need to get "wordString" from the html
// this one gets rid of negative numbers, spaces in strings, and counts vowels




let numberArray = [1, 3, -4, 6, -7]
console.log(numberArray);

console.log(numberArray.filter(filterNegative));

function filterNegative(x){
    return x >= 0
}



let wordString = "Here is a string of words"
console.log(wordString);


function filterSpaces(x){
   
    let noSpcStr = wordString.replace(/\s+/g, '');
    console.log(noSpcStr);
}


function numberOfVowels(){
    let numOfVowels = wordString.replace(/[^aeiou]/gi, "").length
    console.log(numOfVowels);
}

filterNegative()
filterSpaces()
numberOfVowels()



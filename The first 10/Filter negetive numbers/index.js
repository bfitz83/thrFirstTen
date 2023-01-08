// this one gets rid of negative numbers, spaces in strings, and counts vowels




let numberArray = [1, 3, -4, 6, -7]
console.log(numberArray);

console.log(numberArray.filter(filterNegative));

function filterNegative(x){
    return x >= 0
}







filterNegative()




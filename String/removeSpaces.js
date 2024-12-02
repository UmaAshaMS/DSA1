//Write a function to remove all spaces from a given string.
function removeSpaces(str){
    let op = str.split(' ').join('')
    return op
}

console.log(removeSpaces('hello world is the string'))
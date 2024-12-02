//Write a recursive function to reverse a string.

function reverseString(str){
    if(str.length <= 0){
        return str
    }
    return str[str.length - 1] + reverseString(str.slice(0,-1))
}

console.log(reverseString('hello'))
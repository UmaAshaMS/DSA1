//Write a recursive function to check if a string is a palindrome (same forwards and backwards).
function isPallindrome(str){
    if(str.length <= 1){
        return true
    }
    if(str[0] !== str[str.length - 1]){
        return false
    }

    return isPallindrome(str.slice(1, str.length -1))
}

console.log(isPallindrome('malayalam'))
console.log(isPallindrome('hello'))
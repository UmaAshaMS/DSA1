//Write a function to check if a given string is a palindrome.

function pallindrome(str){
    let reverse = ''
    
    for(let i = str.toLowerCase().length-1; i >= 0; i--){
        reverse += str.toLowerCase()[i]
    }
    console.log(reverse)
    if(reverse === str.toLowerCase()){
        return true
    } 
    else{
        return false
    }
}

console.log(pallindrome('MaLayalaM'))
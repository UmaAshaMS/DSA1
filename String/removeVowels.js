//Write a function to remove the vowels in a string.
function removeVowels(str){
    let vowels = ['a','e','i','o','u']
    let op = ''
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i].toLowerCase())){
            op += str[i]
        }
    }
    return op
}

console.log(removeVowels('helloo'))
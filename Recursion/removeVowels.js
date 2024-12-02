//Write a recursive function that removes all vowels (a, e, i, o, u) from a string.

function removeVowels(str){
    if(str.length === 0){
        return ''
    }
    const vowels = 'aeiouAEIOU'
    if(vowels.includes(str[0])){
        return removeVowels(str.slice(1))
    }
    else{
        return str[0] + removeVowels(str.slice(1))
    }

}

console.log(removeVowels('hello'))
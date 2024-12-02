//Write a function to count the number of vowels in a string.
function countVowels(str){
    const vowels = ['a','e','i','o','u'] 
    let count  = 0
    str.split('').forEach((s) => {
        if(vowels.includes(s)){
            count++
        }
    })
    return count
}

console.log(countVowels('hellooooooeea'))
//Write a function to check if a string contains only unique characters.
function uniqueChar(str){
    let count = {}
    for(let i of str){
        if(count[i]){
            count[i]++
        }
        else{
            count[i] = 1
        }
    }
    for(let i in count){
        if(count[i] > 1){
            return false
        }
    }
    return true
}

console.log(uniqueChar('hello'))
console.log(uniqueChar('abcdef'))
console.log(uniqueChar('asdfa'))


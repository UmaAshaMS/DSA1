//Write a function to find the most frequent character in a string.
function findFreqChar(str){
    let count = {}
    for(let i of str){
        if(count[i]){
            count[i]++
        }
        else{
            count[i] = 1
        }
    }

    let maxCount = 0
    let maxCountChar = ''
    for(let i in count){
        if(count[i] > maxCount){
            maxCount = count[i]
            maxCountChar = i
        }
    }
    return maxCountChar
}

console.log(findFreqChar('helloooo'))
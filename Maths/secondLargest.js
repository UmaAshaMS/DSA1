function secondLargest(arr){
    let max = 0
    let secondMax = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max
            max = arr[i]
        } 
    }
    return secondMax
}

console.log(secondLargest([1,2,3,44,55,66,99,100,101]))
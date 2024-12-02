function maxValue(arr){
    let max = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(maxValue([1,2,3,4,4,56,78,99,100]))
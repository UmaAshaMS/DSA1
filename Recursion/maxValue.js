//Write a recursive function to find the maximum element in an array.

function maxValue(arr){
    if(arr.length === 1){
        return arr[0]
    }
    let max = maxValue(arr.slice(1))
    return arr[0] > max ? arr[0] : max 
} 

console.log(maxValue([1,2,3,4,5,6]))


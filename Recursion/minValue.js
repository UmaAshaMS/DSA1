//Write a recursive function to find the minimum element in an array.

function findMin(arr){
    if(arr.length === 1){
        return arr[0]
    }
    let min = findMin(arr.slice(1))
    return arr[0] < min ? arr[0] : min
}

console.log(findMin([1,2,3]))
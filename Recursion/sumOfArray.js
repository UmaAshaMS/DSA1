//Write a recursive function to find the sum of all elements in an array.
function sum(arr){
    if(arr.length === 0 ){
        return 0
    }
    return arr[0] + sum(arr.slice(1))
}

console.log(sum([1,2,3,4,5,6]))
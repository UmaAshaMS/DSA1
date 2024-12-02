//Write a recursive function to count the number of occurrences of a particular value in an array.

function countOccurence(arr, value){
    if(arr.length === 0){
        return 0
    }
    let count = arr[0] === value ? 1 : 0
    return count + countOccurence(arr.slice(1), value)
}

console.log(countOccurence([1,2,3,4,5,5], 5))
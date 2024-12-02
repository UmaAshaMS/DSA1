function binarySearch(arr, value){
    return search(0, arr.length, arr, value)
}

function search(left, right, arr, value){
    
    let middle = Math.floor((left + right) / 2)
    if(value === arr[middle]){
        return middle
    }
    if(value < arr[middle]){
        return search(0, middle - 1, arr, value)
    }
    else{
        return search(middle+1, arr.length, arr, value)
    }
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); 
console.log(binarySearch([-5, 10, 20, 30, 40, 50,60,70], 50)); 
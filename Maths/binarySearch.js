function binarySearch(arr,t){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        if(arr[middle] === t){
            return middle        
        }
        if(t < arr[middle]){
            right = middle - 1
        }
        else{
            left = middle + 1
        }
    }
    return -1
}

const arr = [12,34,35,40,56,78,90]

console.log(binarySearch(arr,40))
console.log(binarySearch(arr,90))
console.log(binarySearch(arr,12))

//Big-O= O(log n)- linear time complexity
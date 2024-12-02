function reverseArray(arr){
    // return arr.reverse()
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let temp = arr[right]
        arr[right]= arr[left]
        arr[left] = temp 

        left++
        right--
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5,6]))
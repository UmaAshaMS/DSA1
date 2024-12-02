function rotate(arr,k){
    k = k % arr.length

    console.log(arr.slice(-k))
    console.log(arr.slice(0,-k))
    console.log('Array after slicing first k elements : ',arr.slice(k))
    console.log('Array after removing elements from 0 to -k', arr.slice(0,-k))
    return arr.slice(-k).concat(arr.slice(0,-k))
}

console.log(rotate([1,2,3,4,5,6,7,8,9,10], 2))
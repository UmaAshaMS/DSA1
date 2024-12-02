//Write a recursive function to find the k-th largest element in an unsorted array.

function kLargest(arr,k){
   arr.sort((a,b)  => a-b)
   console.log(arr)
   return arr[k-1]
}

console.log(kLargest([1,2,45,23,60,99], 3))
function returnIndex(arr,t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t){
            return i
        }
    }
    return -1
}
const arr= [1,2,3,4,5,60,-5]
const t = 60
console.log(returnIndex(arr, t))
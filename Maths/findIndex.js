//Find the index of a Value without Inbuild Method

function findIndex(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
}

console.log(findIndex([1,2,3,4,5,6,7,8,9], 9))
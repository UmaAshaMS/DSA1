//Write a recursive function to flatten an array that may contain other arrays (nested arrays) into a single array.

function flattenArray(arr){
    if(arr.length === 0){
        return []
    }
    if(Array.isArray(arr[0])){
        return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)))
    }

    return [arr[0]].concat(flattenArray(arr.slice(1)))
}

console.log(flattenArray([1,[1,2],[12,13,14,[15,16]]]))
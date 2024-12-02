function flattenArray(arr){
    let result = []
    arr.forEach((n) => {
        if(Array.isArray(n)){
            result = result.concat(flattenArray(n))
        }
        else{
            result.push(n)
        }
    })
    return result
}

console.log(flattenArray([1,2,[1,2],[1,2,3]]))
const arr = [1,2,3,'hello',true]
console.log(arr[4])

//add to end 
arr.push(5)

for(let i of arr){
    console.log(i)

}
arr.unshift(0)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift() 
console.log(arr)
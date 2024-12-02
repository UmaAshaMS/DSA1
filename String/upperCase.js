//Write a function to convert the first character of each word in a string to uppercase.
function upperCase(str){
    let arr = str.split(' ')
    //for map we have to assign the op to arr, to create a new array
    arr = arr.map((s) => {
        return s[0].toUpperCase() + s.slice(1)
    })
        
    return arr.join(' ')
} 

console.log(upperCase('hello world is the string'))
//Write a function to reverse a given string.

//To reverse a string start from the last chara or start from the beginning and prepend it. 
//As string is immutable, we cannot directly assign value to each element
//We need another string to hold the values 

function reverseString(str){
   let reverse = ''
//    for(let i = str.length - 1; i >= 0; i--){
//     reverse += str[i] 
//    }

for(let i = 0; i < str.length; i++){
    reverse = str[i] + reverse
}
   return reverse
}
console.log(reverseString('hello'))
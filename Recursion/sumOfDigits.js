//Write a recursive function to compute the sum of digits of a given number.

// function sumOfDigits(n){
//     let sum = 0
//     while(n>0){
//         let last = n % 10
//         sum = sum + last
//         n = Math.floor(n / 10)
//     }
//     return sum
// }

function sumOfDigits(n){
    if(n === 0){
        return 0
    }
    return n % 10 + sumOfDigits(Math.floor(n /10))
}

console.log(sumOfDigits(1234))
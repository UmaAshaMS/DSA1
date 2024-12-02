//Write a recursive function to compute the power of a number x raised to n (i.e., x^n).

function power(x,n){
    if(n === 1){
        return x
    }
    return x * power(x, n-1)
}

console.log(power(2,4))
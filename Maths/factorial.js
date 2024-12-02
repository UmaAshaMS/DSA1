function factorial(n){
    let op = 1
    for(let i = 2; i <= n; i++){
      op *= i   
    }
    return op
}

console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(8))

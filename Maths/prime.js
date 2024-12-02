function isPrime(n){
    if(n < 2){
        return true
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(8))
console.log(isPrime(11))
console.log(isPrime(24))





//Write a recursive function to print numbers from n down to 1.

function countDown(n){
    if(n < 1){
        return;
    }
    console.log(n)
    countDown(n-1)
}

(countDown(10))
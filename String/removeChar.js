//Write a function to remove a specific chara in a string.
function removeChara(str,chara){
    let op = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] !== chara){
            op = op + str[i]
        }
    }
    return op
}

console.log(removeChara('hello','l'))

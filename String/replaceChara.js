//Write a function to replace all instances of a character in a string with another character.
function replaceChara(str, org, rpl){
    let op = ''
    for(let i = 0; i <= str.length - 1; i++){
        if(str[i] === org){
            op += rpl 
        }
        else{
            op += str[i];
        }
    }
    return op
}

console.log(replaceChara('hello world','o', 'a'))

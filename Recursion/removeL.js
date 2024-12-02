function removeChara(str){
    if(str.length === 0){
        return ''
    }
    const chara = 'l'
    if(str[0] === chara){
        return removeChara(str.slice(1))
    }
    else{
        return str[0] + removeChara(str.slice(1))
    }
}

console.log(removeChara('hellodfl'))
const set = new Set([1,2,2,3,4,1,5,3,4])
console.log(set)

set.add(8)
console.log(set)

for(const s of set){
    console.log(s)
}

set.add(1)
console.log(set)

console.log(set.has(5))

console.log(set.size)

set.clear()
console.log(set)
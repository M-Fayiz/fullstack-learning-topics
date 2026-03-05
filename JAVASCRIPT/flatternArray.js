let arr = [1,2,[3,[4,5],6],7,[8]]

function flatten(arr){
    let res =[]
    for(let val of arr){
        if(Array.isArray(val)){
           const m =flatten(val)
           console.log('m',m)
           console.log('...........',...m)
           res.push(...m)
        }else{
            res.push(val)
        }
    }
    return res
}

console.log(flatten(arr))
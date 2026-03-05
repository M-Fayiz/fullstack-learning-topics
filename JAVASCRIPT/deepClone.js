// ARRAY Deep Copy
let arr = [1,2,[3,[4,5],6],7,[8]]


function copyArray(arr){
    let res =[]

    for(let val of arr){
        if(Array.isArray(val)){
            res.push(copyArray(val))
        }else{
            res.push(val)
        }
    }
    return res
}
const copiedArray =copyArray(arr)
copiedArray[2][1][0]=100
// console.log(copiedArray)
// console.log(arr)

let obj = {a:10,b:{c:30,d:'a',m:{f:[1,2,3]}},j:100}

function copyObj(obj){
    let res ={}

    for(let item in obj){
        if(Array.isArray(obj[item])){
            res=obj[item]
            continue
        }
        if(typeof obj[item] === 'object'){
            res[item]=copyObj(obj[item])
        }else{
            res[item]=obj[item]
        }
    }
    return res
}

const copiedOBJ = copyObj(obj)
console.log('copied :',copiedOBJ)
console.log('old :',obj)

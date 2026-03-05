let arr =[1,3,4,6,7,7,7,7,7,7,7,8,9,10]

function binarySearch(arr,t){
    let left = 0
    let right = arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid]==t){
            left= mid+1
        }else if(t<arr[mid]){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    console.log(arr[left])
    return -1
}

console.log('binary :',binarySearch(arr,7))
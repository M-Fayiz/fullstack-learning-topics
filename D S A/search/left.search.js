const arr = [1,2,3,4,4,4,4,4,5,6,7]

function search(arr,t){
    let left = 0
    let right = arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(t<arr[mid]){
            right = mid-1
        }else{
            left = mid +1
        }
    }
    console.log(arr[left])
}

search(arr,6)
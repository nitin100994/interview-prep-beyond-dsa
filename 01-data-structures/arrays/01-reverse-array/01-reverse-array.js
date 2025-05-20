function reverseArray(arr){
    // Step 1 : Visualise goal :- [1,2,3,4,5] ---> [5,4,3,2,1]
    let left = 0; let right = arr.length - 1;
    for(let i=0 ; left < right ; i++){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]))
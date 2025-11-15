function bubblesortOnce(a) {
    let arr = [...a]
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
           [arr[i-1], arr[i]]   =  [arr[i], arr[i-1]]
        }
    }
    return arr
}
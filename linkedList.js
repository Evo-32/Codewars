function listToArray(list) {
    let result = []
    let obj = list
    while(obj !== null){
        result.push(obj.value)
        obj= obj.next
    }
    return result
}
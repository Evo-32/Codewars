function jumpingNumber(n){
    if(n.toString().length === 1){
        return 'Jumping!!'
    }else if(n.toString().length > 1){
        let numArr = n.toString().split('')
        for(let i =1 ; i<numArr.length; i++){
            if(Math.abs(numArr[i] - numArr[i - 1]) !== 1){
                return 'Not!!'
            }
        }
    }
    return  'Jumping!!'
}
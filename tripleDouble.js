function tripledouble(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()
    
    for(let digit=0; digit<=9; digit++){
        const triple = digit.toString().repeat(3)
        const double = digit.toString().repeat(2)
        if(str1.includes(triple) && str2.includes(double)){
            return 1
        }
    }
    return 0;
}
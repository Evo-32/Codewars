function solution (roman) {
    
    const symbols ={
        I    :   1,
        V    :   5,
        X    :   10,
        L    :   50,
        C    :   100,
        D    :   500,
        M    :   1000,
    }
    
    return roman.split('').reduce((total,curr,i,arr) => {
        const current = symbols[curr]
        const next =  symbols[arr[i+1]]
        
        if(current < next){
            return total - current
        }else{
           return  total+= current
           
        }
    },0)
} 
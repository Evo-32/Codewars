function addedChar(s1, s2){
    const count1 = {}
    const count2 = {}
    
    for(let chr of s1){
        count1[chr] = (count1[chr] || 0)+1
    }
    
    for(let chr of s2){
        count2[chr] = (count2[chr] || 0)+1
    }
    
    for(let chr in count2){
        if((count2[chr] - (count1[chr]||0)) === 3){
            return chr
        }
    }
}
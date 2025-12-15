function countSmileys(arr) {
    let count = 0
    
    let eyes  = [':',';']
    let noses = ['-','~']
    let mouths = [')','D']
    
    for(let smile of arr){
        if(smile.length === 2 ){
            if(eyes.includes(smile[0]) && mouths.includes(smile[1])){
                count++
            }
        }else if(smile.length === 3){
            if(eyes.includes(smile[0]) && noses.includes(smile[1]) && mouths.includes(smile[2])){
                count++
            }
        }
    }
  return count
}


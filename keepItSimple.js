function isKiss( words ){
    let wordArr = words.split(' ')
    let nberOfWords = wordArr.length
    for(let word of wordArr){
        if(word.length  > nberOfWords){
            return "Keep It Simple Stupid"
        }
    }
    return "Good work Joe!"
}
function grabscrab(anagram, dictionary) {
    let result = []
    let chrs = anagram.split('').sort().join('')
    for(let word of dictionary){
        let sortedWord = word.split('').sort().join('')
        if(anagram.length === word.length){
            if(sortedWord === chrs){
            result.push(word)
            }
        }
    }
    return result
}
function pigIt(str){
    return str.split(' ').map((word) =>{
        if (/^[!?.]$/.test(word)) return word;
        return word.slice(1) + word[0] + 'ay';
    }).join(' ')
}
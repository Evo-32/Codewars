function replaceCommon(string, chr) {
const count = {}
    
    let letters = string.split(' ').map((word) => word.split('')).flat()
    for(let letter of letters){
        count[letter] = (count[letter] || 0)+1
    }
    
    let currently = null
    let highestCount = 0;
     for(let ch  of string){
         if(count[ch] > highestCount){
              highestCount = count[ch]
              currently =  ch
         }
     }
    
    return string.replaceAll(currently,chr)
}
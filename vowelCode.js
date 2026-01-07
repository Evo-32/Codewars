function encode(string) {
    let hide = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }
    
  return string.split('').map(chr => hide[chr] ?? chr).join('')
}


function decode(string) {
    let hide = {
         1: 'a',
         2: 'e',
         3: 'i',
         4: 'o',
         5: 'u' 
    }
    
  return string.split('').map(chr => hide[chr] ?? chr).join('')
}

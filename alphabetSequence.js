function alphaSeq (str) {
   let chrs = str.toLowerCase().split('').sort()
   let chrRepeat = chrs.map((chr) => chr.repeat(chr.charCodeAt(0)-96))
   return chrRepeat.map((repStr) => 
   repStr[0].toUpperCase() + repStr.slice(1).toLowerCase()
   ).join(',')
}
function onlyDuplicates(str) {
    return str.split('').filter((chr,_,arr)  => arr.indexOf(chr)  !== arr.lastIndexOf(chr)).join('')
}

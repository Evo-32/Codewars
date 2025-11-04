function repeats(arr){
return arr.filter((chr,_,arr)  => arr.indexOf(chr)  === arr.lastIndexOf(chr)).reduce((total,curr) => total += curr,0)
};
function accum(s) {
  return s.split('').map((chr,index) => {
    return s[index].toUpperCase() + s[index].toLowerCase().repeat(index)
  }).join('-')
}
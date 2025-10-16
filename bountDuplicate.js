function duplicateCount(text){
  const lower = text.toLowerCase()
  const duplicates = new Set()   
  const seen = new Set()     

  for (let ch of lower) {
    if (seen.has(ch)) {
      duplicates.add(ch)
    } else {
      seen.add(ch);
    }
  }

  return duplicates.size;
}

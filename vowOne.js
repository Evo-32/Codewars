function vowelOne(s){
  let vowels = 'iuoae';
  return s.split('').map((chr) => {
    return vowels.includes(chr.toLowerCase()) ? '1':'0'
  }).join('')
}
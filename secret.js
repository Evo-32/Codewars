function reverseByCenter(s){
  let half = Math.floor(s.length / 2)
  if(s.length % 2 === 0){
      return s.slice(half) + s.slice(0,half)
  }else{
      const front = s.split('').slice(0,half).join('')
     const back = s.split('').slice(half+1).join('')
     const mid = s[half]
     return back + mid + front
  }
}